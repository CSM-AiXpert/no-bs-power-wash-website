"use client";

import { useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { communities } from "@/lib/data/communities";

/**
 * Infinite marquee of Lowcountry gated communities.
 * Pure CSS animation, pauses on hover, static wrap for reduced motion.
 */
export default function CommunitiesCarousel() {
  const reduce = useReducedMotion();
  const row = [...communities, ...communities];

  return (
    <div className="group relative overflow-hidden py-2" aria-label="Communities served by No BS Power Wash">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink/80 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink/80 to-transparent" aria-hidden="true" />
      <div
        className="flex w-max gap-4 pr-4 group-hover:[animation-play-state:paused]"
        style={
          reduce
            ? { flexWrap: "wrap" }
            : { animation: "nobs-marquee 55s linear infinite" }
        }
      >
        {(reduce ? communities : row).map((c, i) => (
          <span key={`${c.name}-${i}`} className="glass flex shrink-0 items-center gap-2.5 rounded-full px-5 py-3">
            <ShieldCheck className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
            <span className="whitespace-nowrap font-display text-sm font-bold text-white">{c.name}</span>
            <span className="font-mono-hud whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-mist">{c.town}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
