import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import CTABand from "@/components/layout/CTABand";
import { locations, getLocation } from "@/lib/data/locations";
import { services } from "@/lib/data/services";
import { site } from "@/lib/data/site";

export function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const { location: slug } = await params;
  const l = getLocation(slug);
  if (!l) return {};
  return {
    title: `${l.name} | No BS Power Wash`,
    description: `${l.intro.slice(0, 150)}... Free quote: ${site.phone}.`,
  };
}

export default async function LocationPage({ params }: { params: Promise<{ location: string }> }) {
  const { location: slug } = await params;
  const l = getLocation(slug);
  if (!l) notFound();
  const top = services.filter((s) => l.topServices.includes(s.slug));
  const others = locations.filter((x) => x.slug !== l.slug);

  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-32 sm:px-6">
        <Reveal>
          <p className="eyebrow">
            <Link href="/service-areas" className="hover:opacity-70">Service Areas</Link> / {l.shortName}
          </p>
          <h1 className="mt-3 font-hero text-4xl font-extrabold text-white sm:text-5xl">{l.name}</h1>
          <p className="mt-3 font-display text-xl text-signal">{l.headline}</p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-chrome">{l.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="rounded-lg bg-electric/90 px-7 py-3.5 text-center font-bold text-ink transition-colors hover:bg-white">Get a Free Quote</Link>
            <a href={site.phoneHref} className="rounded-lg glass px-7 py-3.5 text-center font-semibold text-chrome transition-colors hover:text-white">Call or text {site.phone}</a>
          </div>
        </Reveal>
      </section>

      <section className="band glass-deep my-12">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-white">What {l.shortName} properties are up against</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {l.localIssues.map((i, n) => (
              <Reveal key={i.title} delay={n * 0.06}>
                <div className="glass lift h-full rounded-2xl p-6">
                  <h3 className="font-display font-bold text-white">{i.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{i.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-extrabold text-white">Communities we serve in {l.shortName}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {l.communities.map((c) => (
              <span key={c} className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-chrome">
                <MapPin className="h-3.5 w-3.5 text-signal" aria-hidden="true" /> {c}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-14 font-display text-2xl font-extrabold text-white">Top services in {l.shortName}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {top.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group glass lift flex cursor-pointer items-center justify-between rounded-2xl p-6">
                <span>
                  <span className="block font-display text-lg font-bold text-white">{s.shortName}</span>
                  <span className="mt-1 block text-sm text-mist">{s.tagline}</span>
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-electric transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-12 text-sm text-mist">
            Also serving: {others.map((o, i) => (
              <span key={o.slug}>
                <Link href={`/service-areas/${o.slug}`} className="text-electric hover:underline">{o.shortName}</Link>
                {i < others.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </Reveal>
      </section>

      <CTABand title={`Get your ${l.shortName} property cleaned without the hassle.`} />
    </>
  );
}
