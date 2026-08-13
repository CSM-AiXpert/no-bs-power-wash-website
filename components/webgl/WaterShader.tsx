"use client";

import { useEffect, useRef } from "react";

/**
 * WaterShader: full-bleed WebGL fragment shader evoking moving water,
 * pressure and refracted light. Raw WebGL, no library.
 * - Deferred init after first paint / idle
 * - DPR capped, 30 FPS everywhere
 * - pauses when off-screen / tab hidden
 * - static CSS fallback when WebGL unavailable or reduced motion
 */
const FRAG = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1.,0.)), u.x),
             mix(hash(i+vec2(0.,1.)), hash(i+vec2(1.,1.)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0; float a = 0.5;
  for(int i=0;i<4;i++){ v += a*noise(p); p = p*2.03 + vec2(1.7, 9.2); a *= 0.5; }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  vec2 p = uv; p.x *= uRes.x / uRes.y;
  float t = uTime * 0.12;

  vec2 flow = vec2(t * 0.7, t * 0.25);
  float n1 = fbm(p * 2.2 + flow);
  float n2 = fbm(p * 3.4 - flow * 1.4 + n1 * 1.6);
  vec2 warp = vec2(n1, n2);
  float water = fbm(p * 2.6 + warp * 2.2 + flow * 0.6);

  float caustic = abs(sin((water + n2) * 9.0 + uTime * 0.5));
  caustic = pow(1.0 - caustic, 6.0);

  float jet = pow(max(0.0, sin((p.x * 1.4 + p.y * 4.0) - uTime * 0.9)), 12.0) * 0.35;
  float vig = smoothstep(1.25, 0.35, distance(uv, vec2(0.38, 0.5)));

  vec3 deep   = vec3(0.012, 0.027, 0.045);
  vec3 mid    = vec3(0.02, 0.10, 0.19);
  vec3 electric = vec3(0.18, 0.66, 1.0);

  vec3 col = mix(deep, mid, water * vig);
  col += electric * caustic * 0.30 * vig;
  col += electric * jet * vig * (0.4 + 0.6 * n1);
  col += electric * pow(water, 3.0) * 0.12;
  col += vec3(0.05, 0.09, 0.13) * smoothstep(0.6, 1.0, uv.y) * 0.4;

  gl_FragColor = vec4(col, 1.0);
}
`;

const FRAG_UNDERTOW = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1.,0.)), u.x),
             mix(hash(i+vec2(0.,1.)), hash(i+vec2(1.,1.)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0; float a = 0.5;
  for(int i=0;i<4;i++){ v += a*noise(p); p = p*2.03 + vec2(1.7, 9.2); a *= 0.5; }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  vec2 c = uv - vec2(0.72, 0.42);
  c.x *= uRes.x / uRes.y;
  float r = length(c);
  float ang = atan(c.y, c.x);
  float t = uTime * 0.10;

  float swirl = fbm(vec2(ang * 2.2 + t * 1.6, r * 5.5 - t * 2.2));
  float rings = pow(abs(sin(r * 16.0 - uTime * 0.7 + swirl * 3.0)), 6.0);
  float foam = fbm(c * 4.5 + vec2(t * 1.2, -t * 0.8));
  float jet = pow(max(0.0, sin((c.x * 3.2 - c.y * 2.4) + uTime * 0.8)), 14.0) * 0.4;
  float vig = smoothstep(1.35, 0.25, r);

  vec3 deep   = vec3(0.03, 0.012, 0.018);
  vec3 ember  = vec3(0.24, 0.03, 0.03);
  vec3 signal = vec3(0.96, 0.16, 0.12);
  vec3 electric = vec3(0.18, 0.66, 1.0);

  vec3 col = mix(deep, ember, swirl * vig);
  col += signal * rings * 0.16 * vig;
  col += signal * pow(foam, 3.0) * 0.14 * vig;
  col += signal * jet * vig * (0.35 + 0.65 * foam);
  col += electric * pow(swirl, 4.0) * 0.20 * vig;
  col += vec3(0.05, 0.06, 0.09) * smoothstep(0.55, 1.0, uv.y) * 0.35;

  gl_FragColor = vec4(col, 1.0);
}
`;

const VERT = `
attribute vec2 aPos;
void main(){ gl_Position = vec4(aPos, 0.0, 1.0); }
`;

export default function WaterShader({ className = "", variant = "tide" }: { className?: string; variant?: "tide" | "undertow" }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let raf = 0;
    let idleId = 0;
    let timeoutId = 0;
    let io: IntersectionObserver | null = null;
    let gl: WebGLRenderingContext | null = null;
    let onResize: (() => void) | null = null;
    let onVisibility: (() => void) | null = null;

    const start = () => {
      if (cancelled || !canvas) return;

      gl = canvas.getContext("webgl", {
        antialias: false,
        alpha: false,
        powerPreference: "low-power",
        desynchronized: true,
        preserveDrawingBuffer: false,
      });
      if (!gl) return;

      const compile = (type: number, src: string) => {
        const s = gl!.createShader(type)!;
        gl!.shaderSource(s, src);
        gl!.compileShader(s);
        return s;
      };
      const prog = gl.createProgram()!;
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, variant === "undertow" ? FRAG_UNDERTOW : FRAG));
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
      gl.useProgram(prog);

      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, "aPos");
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

      const uRes = gl.getUniformLocation(prog, "uRes");
      const uTime = gl.getUniformLocation(prog, "uTime");

      let visible = true;
      let lastFrame = 0;
      const frameInterval = 1000 / 30;
      const startTime = performance.now();

      const resize = () => {
        if (!gl || cancelled) return;
        const small = window.innerWidth < 768;
        const dpr = Math.min(window.devicePixelRatio || 1, small ? 1.0 : 1.25);
        const w = Math.max(1, Math.floor(canvas.clientWidth * dpr));
        const h = Math.max(1, Math.floor(canvas.clientHeight * dpr));
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
          gl.viewport(0, 0, w, h);
        }
      };
      onResize = resize;
      resize();
      window.addEventListener("resize", resize, { passive: true });

      const frame = (now: number) => {
        raf = requestAnimationFrame(frame);
        if (!gl || !visible || document.hidden) return;
        if (now - lastFrame < frameInterval) return;
        lastFrame = now;
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uTime, (now - startTime) / 1000);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      };
      raf = requestAnimationFrame(frame);

      io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
      });
      io.observe(canvas);

      onVisibility = () => {
        if (document.hidden && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        } else if (!document.hidden && !raf) {
          raf = requestAnimationFrame(frame);
        }
      };
      document.addEventListener("visibilitychange", onVisibility);
    };

    const ric = window.requestIdleCallback?.bind(window);
    if (ric) {
      idleId = ric(start, { timeout: 900 });
    } else {
      timeoutId = window.setTimeout(start, 250);
    }

    return () => {
      cancelled = true;
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
      if (raf) cancelAnimationFrame(raf);
      io?.disconnect();
      if (onResize) window.removeEventListener("resize", onResize);
      if (onVisibility) document.removeEventListener("visibilitychange", onVisibility);
      gl?.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [variant]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 30% 40%, rgba(11,111,214,0.28) 0%, rgba(3,10,18,0.0) 55%), linear-gradient(160deg, #04121f 0%, #05070a 60%, #05070a 100%)",
        }}
      />
      <canvas ref={ref} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
