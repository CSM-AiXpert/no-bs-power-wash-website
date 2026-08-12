"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  title,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
}) {
  const [pos, setPos] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
    const move = (ev: PointerEvent) => setFromClientX(ev.clientX);
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  return (
    <figure className="group">
      <div
        ref={trackRef}
        role="slider"
        aria-label={`Before and after comparison: ${title}`}
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onDragStart={(e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
        }}
        className="relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-xl border-2 border-[rgba(150,205,255,0.34)] bg-[#07101c]/35 shadow-[0_16px_45px_rgba(0,0,0,.3)]"
      >
        <Image draggable={false} src={`/results/${after}`} alt={afterAlt} fill sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1280px) 45vw, 400px" quality={62} className="pointer-events-none object-cover [filter:brightness(1.13)_contrast(1.08)_saturate(1.10)] [mix-blend-mode:normal]" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <Image draggable={false} src={`/results/${before}`} alt={beforeAlt} fill sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1280px) 45vw, 400px" quality={62} className="pointer-events-none object-cover [filter:none] [mix-blend-mode:normal]" style={{ width: trackRef.current?.clientWidth || "100%", maxWidth: "none" }} />
        </div>
        {/* divider */}
        <div className="pointer-events-none absolute inset-y-0 z-10" style={{ left: `${pos}%` }} aria-hidden="true">
          <div className="absolute inset-y-0 -left-px w-0.5 bg-electric shadow-[0_0_18px_rgba(46,168,255,0.8)]" />
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric bg-ink/90 px-2.5 py-2 text-[10px] font-bold tracking-widest text-electric shadow-[0_0_16px_rgba(46,168,255,.65)]">
            <span>&larr; &rarr;</span>
          </div>
        </div>
        <span className="absolute left-3 top-3 rounded bg-ink/80 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-mist">Before</span>
        <span className="absolute right-3 top-3 rounded bg-electric/90 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">After</span>
      </div>
      <figcaption className="mt-3 inline-block rounded bg-ink/90 px-2 py-1 text-sm font-medium text-chrome">{title}</figcaption>
    </figure>
  );
}
