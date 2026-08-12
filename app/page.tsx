import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, ShieldCheck, MessageSquare, Sparkles, MapPin } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import CTABand from "@/components/layout/CTABand";
import BeforeAfterSlider from "@/components/results/BeforeAfterSlider";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { site } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import { pairs } from "@/lib/data/results";
import { posts } from "@/lib/data/blog";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const problems = [
  { title: "Green siding", body: "That green film is algae feeding on your siding. Humidity here means it never stops on its own.", service: "house-washing" },
  { title: "Black roof streaks", body: "A living bacteria called gloeocapsa magma. High pressure voids warranties. Soft washing kills it.", service: "roof-cleaning" },
  { title: "Dark, slick concrete", body: "Mildew in the pores of your driveway. It is ugly in photos and slippery when wet.", service: "driveway-concrete-cleaning" },
  { title: "Funky screened porch", body: "Pollen, mildew, and cobwebs pile up fast in a Lowcountry porch. Gentle rinse, done right.", service: "screened-porch-cleaning" },
];

const why = [
  { icon: MessageSquare, title: "Straight answers", body: "You talk to Bob, the owner. You get a real price, a real schedule, and no upsell script." },
  { icon: ShieldCheck, title: "The right method for the surface", body: "Soft wash where pressure would damage, real pressure where the surface can take it. Not the other way around." },
  { icon: Sparkles, title: "100% satisfaction guarantee", body: "If something is not right, we come back and make it right. Simple as that." },
  { icon: MapPin, title: "Local, on purpose", body: "Bluffton, Hilton Head Island, and Beaufort. We know what Lowcountry humidity does to a home because we live in it too." },
];

export default function HomePage() {
  const featured = pairs.slice(0, 3);
  const latest = posts.slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92svh] items-center overflow-hidden pt-16">
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0">
            <Reveal eager>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-electric">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Serving The Greater Lowcountry
              </p>
            </Reveal>
            <Reveal eager>
              <h1 className="font-hero text-5xl font-extrabold leading-[0.95] tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)] sm:text-7xl">
                <span className="text-signal drop-shadow-[0_0_28px_rgba(244,42,30,0.55)]">No Games.</span><br />
                <span className="text-electric drop-shadow-[0_0_28px_rgba(46,168,255,0.55)]">Just Clean.</span>
              </h1>
            </Reveal>
            <Reveal eager>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-chrome">
                Quality results without the BS. Pressure washing, power washing, and soft washing for Lowcountry homes and businesses, done with the right method for the surface.
              </p>
            </Reveal>
            <Reveal eager>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="rounded-lg bg-electric/90 px-8 py-4 text-center text-base font-bold text-ink transition-colors duration-200 hover:bg-white">
                  Get a Free Quote
                </Link>
                <a href={site.phoneHref} className="flex items-center justify-center gap-2 rounded-lg glass px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:border-electric">
                  <Phone className="h-4 w-4 text-electric" aria-hidden="true" /> Call or text {site.phone}
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal eager className="hidden lg:block">
            <div className="relative">
              <Image src="/brand/nobs-logo.webp" alt="No BS Power Wash emblem: No Games. Just Clean." width={1024} height={1024} priority
                className="mx-auto w-full max-w-md" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="eyebrow">What we clean</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">Every exterior surface. One straight shooter.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link href={`/services/${s.slug}`} className="group flex h-full cursor-pointer flex-col rounded-2xl border glass p-6 transition-colors duration-200 hover:border-electric/60 lift">
                <ServiceIcon name={s.icon} className="h-7 w-7 text-electric" />
                <h3 className="mt-4 font-display text-lg font-bold text-white">{s.shortName}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">{s.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric">
                  See the service <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="band glass-deep my-12 py-16">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <p className="eyebrow">Sound familiar?</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-white sm:text-4xl">Lowcountry grime is not dirt. It is alive, and it is winning.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <Link href={`/services/${p.service}`} className="block h-full cursor-pointer rounded-2xl border glass p-6 transition-colors duration-200 hover:border-electric/60 lift">
                  <h3 className="font-display text-base font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{p.body}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Proof, not promises</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">Drag the line. Real jobs, real results.</h2>
            </div>
            <Link href="/results" className="inline-flex items-center gap-2 text-sm font-semibold text-electric hover:text-white">
              See all results <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <BeforeAfterSlider before={p.before} after={p.after} beforeAlt={p.beforeAlt} afterAlt={p.afterAlt} title={p.title} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY NO BS */}
      <section className="band glass-deep my-12 py-16">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <p className="eyebrow">Why No BS</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">We don&rsquo;t cut corners. We clean them.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="flex h-full gap-4 rounded-2xl border glass p-6">
                  <w.icon className="h-6 w-6 shrink-0 text-electric" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-base font-bold text-white">{w.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist">{w.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-10 text-center">
              <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-lg border-2 border-signal/55 bg-signal/10 px-7 py-3 text-sm font-bold text-white transition-colors hover:border-electric hover:bg-electric/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric">
                Ask about Referral program
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">Three steps. Zero hassle.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { n: "01", t: "Reach out", b: "Call, text, or send the quote form. Tell us what you are looking at. Photos help but are not required." },
            { n: "02", t: "Get a straight quote", b: "A real price based on your property and the right method for each surface. No pressure, no games." },
            { n: "03", t: "Watch it come clean", b: "We show up when we said we would, do the work right, and walk it with you when we are done." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="h-full rounded-2xl border glass p-7">
                <span className="font-display text-4xl font-extrabold text-electric/40">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-white">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LATEST RESOURCES */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">From the blog</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">Useful answers. No fluff.</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-electric hover:text-white">
              All articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {latest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link href={`/blog/${p.slug}`} className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border glass transition-colors duration-200 hover:border-electric/60 lift">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={`/results/${p.image}`} alt={p.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="eyebrow">{p.service} &middot; {p.dateLabel}</p>
                  <h3 className="mt-2 font-display text-base font-bold leading-snug text-white">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-mist">{p.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
