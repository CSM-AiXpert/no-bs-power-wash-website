import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import CTABand from "@/components/layout/CTABand";
import { posts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog | Lowcountry Exterior Cleaning Answers",
  description:
    "Practical answers about pressure washing, soft washing, roof streaks, algae, HOA letters, and listing prep for Bluffton, Hilton Head Island, and Beaufort SC homeowners.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6">
        <Reveal>
          <p className="eyebrow">Blog</p>
          <h1 className="mt-3 font-hero text-4xl font-extrabold text-white sm:text-5xl">Clean answers for dirty problems.</h1>
          <p className="mt-5 max-w-2xl text-lg text-mist">
            Real questions Lowcountry homeowners ask us, answered straight. Newest first.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <Link href={`/blog/${featured.slug}`} className="group mt-12 grid cursor-pointer overflow-hidden rounded-2xl border glass transition-colors hover:border-electric/60 lift lg:grid-cols-2">
            <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[320px]">
              <Image src={`/results/${featured.image}`} alt={featured.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" priority
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p className="eyebrow">Latest &middot; {featured.service} &middot; {featured.dateLabel}</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-white lg:text-3xl">{featured.title}</h2>
              <p className="mt-4 leading-relaxed text-mist">{featured.excerpt}</p>
              <span className="mt-6 text-sm font-semibold text-electric">Read the article &rarr;</span>
            </div>
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06}>
              <Link href={`/blog/${p.slug}`} className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border glass transition-colors hover:border-electric/60 lift">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={`/results/${p.image}`} alt={p.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow">{p.service} &middot; {p.dateLabel}</p>
                  <h2 className="mt-2 font-display text-lg font-bold leading-snug text-white">{p.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">{p.excerpt}</p>
                  <span className="mt-4 text-xs font-semibold text-mist">{p.readTime}</span>
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
