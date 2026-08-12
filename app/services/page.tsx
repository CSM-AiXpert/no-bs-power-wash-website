import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import CTABand from "@/components/layout/CTABand";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Exterior Cleaning Services in Bluffton & Hilton Head SC",
  description:
    "House washing, soft washing, roof cleaning, driveway and concrete cleaning, pressure washing, and screened porch cleaning across the SC Lowcountry. Free quotes: 843-321-9345.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h1 className="mt-3 max-w-3xl font-hero text-4xl font-extrabold text-white sm:text-5xl">
            The right clean for every surface on your property.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-mist">
            Pressure washing, power washing, and soft washing are not interchangeable. Each service below explains what we clean, how we clean it, and why the method matters.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link href={`/services/${s.slug}`} className="group flex h-full cursor-pointer flex-col rounded-2xl border glass p-7 transition-colors duration-200 hover:border-electric/60 lift">
                <ServiceIcon name={s.icon} className="h-8 w-8 text-electric" />
                <h2 className="mt-4 font-display text-xl font-bold text-white">{s.shortName}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">{s.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-electric">
                  Details <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
