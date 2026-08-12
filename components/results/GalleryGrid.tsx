"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { ResultImage } from "@/lib/data/results";

/** Curated 6 up front; full catalog expands on demand. */
export default function GalleryGrid({
  featured,
  rest,
}: {
  featured: ResultImage[];
  rest: ResultImage[];
}) {
  const [open, setOpen] = useState(false);

  const Card = ({ g }: { g: ResultImage }) => (
    <figure className="group">
      <Link href={`/services/${g.serviceSlug}`} className="block cursor-pointer">
        <div className="glass relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image src={`/results/${g.file}`} alt={g.alt} fill sizes="(max-width: 640px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <span className="absolute bottom-2 left-2 rounded bg-ink/85 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-electric">
            {g.service}
          </span>
        </div>
      </Link>
    </figure>
  );

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {featured.map((g) => <Card key={g.file} g={g} />)}
      </div>
      {open && (
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {rest.map((g) => <Card key={g.file} g={g} />)}
        </div>
      )}
      <div className="mt-8 text-center">
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="glass inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:border-electric"
        >
          {open ? (
            <><ChevronUp className="h-4 w-4 text-electric" aria-hidden="true" /> Show less</>
          ) : (
            <><ChevronDown className="h-4 w-4 text-electric" aria-hidden="true" /> View full project catalog ({rest.length} more photos)</>
          )}
        </button>
      </div>
    </div>
  );
}
