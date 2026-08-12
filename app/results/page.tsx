import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import CTABand from "@/components/layout/CTABand";
import BeforeAfterSlider from "@/components/results/BeforeAfterSlider";
import GalleryGrid from "@/components/results/GalleryGrid";
import { pairs, gallery } from "@/lib/data/results";

export const metadata: Metadata = {
  title: "Results | Before & After Exterior Cleaning in the Lowcountry",
  description:
    "Real before and after photos from No BS Power Wash jobs in Bluffton, Hilton Head Island, and Beaufort SC. House washing, roof cleaning, driveways, and more.",
  alternates: { canonical: "/results" },
};

export default function ResultsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6">
        <Reveal>
          <p className="eyebrow">Results</p>
          <h1 className="mt-3 max-w-3xl font-hero text-4xl font-extrabold text-white sm:text-5xl">Proof beats promises. Every time.</h1>
          <p className="mt-5 max-w-2xl text-lg text-mist">
            Every photo below is a real No BS Power Wash job. The before/after pairs show the same surface, same angle. Drag the divider and see exactly what a proper clean looks like.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-extrabold text-white">Before / After</h2>
        </Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {pairs.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08}>
              <BeforeAfterSlider before={p.before} after={p.after} beforeAlt={p.beforeAlt} afterAlt={p.afterAlt} title={p.title} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band glass-deep my-12 py-16">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-white">Completed projects</h2>
            <p className="mt-2 text-mist">Six of our favorites up front. Open the full catalog for the rest.</p>
          </Reveal>
          <div className="mt-10">
            <GalleryGrid
              featured={gallery.slice(0, 6)}
              rest={gallery.slice(6)}
            />
          </div>
        </div>
      </section>

      <CTABand title="Your property could be the next before and after." sub="Send a couple photos or just describe what you are seeing. Free quote, straight answer." />
    </>
  );
}
