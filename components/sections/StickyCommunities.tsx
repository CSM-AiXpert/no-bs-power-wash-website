"use client";

import { useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { communities } from "@/lib/data/communities";

/** Always-visible community trust ticker. Names only, no town labels. */
export default function StickyCommunities() {
  const reduce = useReducedMotion();
  const row = [...communities, ...communities];

  return (
    <aside className="fixed inset-x-0 bottom-0 z-[80] h-[46px] overflow-hidden border-t border-white/15 bg-[#04070c]/92 backdrop-blur-xl" aria-label="Communities that trust No BS">
      <div className="flex h-full items-center">
      <div className="relative z-10 hidden h-full shrink-0 items-center gap-2 border-r border-white/15 bg-[#070b12] px-3 sm:flex sm:px-5">
          <ShieldCheck className="h-4 w-4 text-signal" aria-hidden="true" />
          <span className="hidden whitespace-nowrap font-mono-hud text-[10px] font-bold uppercase tracking-[.16em] text-white sm:block">Communities that trust No BS</span>
          <span className="whitespace-nowrap font-mono-hud text-[10px] font-bold uppercase tracking-[.16em] text-white sm:hidden">Trusted locally</span>
        </div>
        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#04070c] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#04070c] to-transparent" />
          <div className="flex w-max items-center gap-8 pl-8" style={reduce ? undefined : { animation: "nobs-marquee 58s linear infinite" }}>
            {(reduce ? communities : row).map((c, i) => (
              <span key={`${c.name}-${i}`} className="whitespace-nowrap font-mono-hud text-[10px] font-semibold uppercase tracking-[.15em] text-chrome">
                <span className="mr-3 text-electric">◆</span>{c.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
