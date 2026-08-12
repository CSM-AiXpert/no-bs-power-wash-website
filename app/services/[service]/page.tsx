import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import CTABand from "@/components/layout/CTABand";
import BeforeAfterSlider from "@/components/results/BeforeAfterSlider";
import { services, getService } from "@/lib/data/services";
import { pairs } from "@/lib/data/results";
import { posts } from "@/lib/data/blog";
import { site } from "@/lib/data/site";

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.shortName} | Bluffton, Hilton Head & Beaufort SC`,
    description: `${s.description.slice(0, 150)}... Free quote: ${site.phone}.`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const servicePairs = pairs.filter((p) => s.pairs.includes(p.id)).slice(0, 2);
  const related = posts.filter((p) => p.serviceSlug === s.slug).slice(0, 2);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.shortName,
    provider: { "@type": "LocalBusiness", name: site.name, telephone: "+1-843-321-9345" },
    areaServed: site.areas,
    description: s.description,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-32 sm:px-6">
          <Reveal>
            <p className="eyebrow">
              <Link href="/services" className="hover:text-white">Services</Link> / {s.shortName}
            </p>
            <h1 className="mt-3 font-hero text-4xl font-extrabold text-white sm:text-5xl">{s.name}</h1>
            <p className="mt-3 font-display text-xl text-electric">{s.tagline}</p>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-chrome">{s.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-lg bg-electric/90 px-7 py-3.5 text-center font-bold text-ink transition-colors hover:bg-white">Get a Free Quote</Link>
              <a href={site.phoneHref} className="rounded-lg glass px-7 py-3.5 text-center font-semibold text-chrome transition-colors hover:text-white">Call or text {site.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-2xl font-extrabold text-white">What this solves</h2>
          <ul className="mt-6 space-y-3">
            {s.solves.map((x) => (
              <li key={x} className="flex gap-3 text-chrome">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-electric" aria-hidden="true" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-10 font-display text-lg font-bold text-white">Surfaces we handle</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {s.surfaces.map((x) => (
              <span key={x} className="rounded-full border glass px-4 py-1.5 text-sm text-chrome">{x}</span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border glass-blue p-7">
            <h2 className="font-display text-2xl font-extrabold text-white">Why method matters</h2>
            <p className="mt-4 leading-relaxed text-chrome">{s.methodNote}</p>
          </div>
          <div className="mt-8 space-y-5">
            {s.process.map((p, i) => (
              <div key={p.title} className="flex gap-4">
                <span className="font-display text-2xl font-extrabold text-electric/50">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display font-bold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mist">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {servicePairs.length > 0 && (
        <section className="band glass-deep my-12 py-16">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold text-white">Real {s.shortName.toLowerCase()} results</h2>
            </Reveal>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {servicePairs.map((p) => (
                <Reveal key={p.id}>
                  <BeforeAfterSlider before={p.before} after={p.after} beforeAlt={p.beforeAlt} afterAlt={p.afterAlt} title={p.title} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <Link href="/results" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric hover:text-white">
                Full results gallery <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-extrabold text-white">Common questions</h2>
          <div className="mt-8 space-y-4">
            {s.faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border glass p-5 open:border-electric/50">
                <summary className="cursor-pointer list-none font-display font-bold text-white marker:hidden">
                  {f.q}
                  <span className="float-right text-electric transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-mist">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
        {related.length > 0 && (
          <Reveal delay={0.1}>
            <h3 className="mt-14 font-display text-lg font-bold text-white">Keep reading</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="cursor-pointer rounded-xl border glass p-5 transition-colors hover:border-electric/60 lift">
                  <p className="eyebrow">{p.dateLabel}</p>
                  <p className="mt-2 font-display font-bold text-white">{p.title}</p>
                </Link>
              ))}
            </div>
          </Reveal>
        )}
      </section>

      <CTABand />
    </>
  );
}
