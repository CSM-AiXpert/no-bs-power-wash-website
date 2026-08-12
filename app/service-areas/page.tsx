import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import CTABand from "@/components/layout/CTABand";
import { ArrowRight, MapPin } from "lucide-react";
import { locations } from "@/lib/data/locations";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Service Areas | Bluffton, Hilton Head, Beaufort, Okatie, Hardeeville & Ridgeland SC",
  description:
    "No BS Power Wash serves Bluffton, Hilton Head Island, Beaufort, Okatie, Hardeeville, and Ridgeland SC with house washing, roof cleaning, soft washing, and concrete cleaning.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-32 sm:px-6">
        <Reveal>
          <p className="eyebrow">Service areas</p>
          <h1 className="mt-3 font-hero text-4xl font-extrabold text-white sm:text-5xl">Where we wash</h1>
          <p className="mt-5 max-w-2xl text-lg text-mist">
            {site.areasLine}. Not sure if you are in range? Call or text {site.phone} and ask. If we cannot get to you, we will say so.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l, i) => (
            <Reveal key={l.slug} delay={i * 0.05}>
              <Link href={`/service-areas/${l.slug}`} className="group glass lift flex h-full cursor-pointer flex-col rounded-2xl p-7">
                <span className="flex items-center gap-2.5">
                  <MapPin className="h-5 w-5 text-signal" aria-hidden="true" />
                  <span className="font-display text-xl font-extrabold text-white">{l.shortName}</span>
                </span>
                <span className="mt-3 flex-1 text-sm leading-relaxed text-mist">{l.intro.slice(0, 120)}...</span>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-electric">
                  {l.shortName} page <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-10 glass rounded-2xl p-6 text-mist">
            <strong className="text-white">Realtors and property managers:</strong> we handle pre-listing cleans and turnover work on a schedule that fits your photographer and your closing date, across every community we serve. Mention the listing when you call.
          </p>
        </Reveal>
      </section>
      <CTABand />
    </>
  );
}
