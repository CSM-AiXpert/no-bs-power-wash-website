import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/motion/Reveal";
import CTABand from "@/components/layout/CTABand";
import { posts, getPost } from "@/lib/data/blog";
import { getService } from "@/lib/data/services";
import { site } from "@/lib/data/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      type: "article",
      publishedTime: p.date,
      images: [{ url: `/results/${p.image}`, alt: p.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: p.metaTitle,
      description: p.metaDescription,
      images: [`/results/${p.image}`],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const svc = getService(p.serviceSlug);
  const more = posts.filter((x) => x.slug !== p.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.metaDescription,
    datePublished: p.date,
    image: `${site.url}/results/${p.image}`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${p.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="mx-auto max-w-3xl px-4 pb-20 pt-32 sm:px-6">
        <Reveal>
          <p className="eyebrow">
            <Link href="/blog" className="hover:text-white">Blog</Link> &middot; {p.service} &middot; {p.dateLabel} &middot; {p.readTime}
          </p>
          <h1 className="mt-4 font-hero text-4xl font-extrabold leading-tight text-white sm:text-5xl">{p.title}</h1>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl glass">
            <Image src={`/results/${p.image}`} alt={p.imageAlt} fill sizes="(max-width: 768px) 100vw, 768px" priority className="object-cover" />
          </div>
        </Reveal>
        <div className="article-body mt-10">
          {p.body.map((b, i) => {
            if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
            if (b.type === "ul") return <ul key={i}>{b.items.map((x, j) => <li key={j}>{x}</li>)}</ul>;
            return <p key={i}>{b.text}</p>;
          })}
        </div>
        {svc && (
          <Reveal>
            <div className="mt-12 rounded-2xl border glass-blue p-7">
              <p className="font-display text-lg font-bold text-white">Dealing with this right now?</p>
              <p className="mt-2 text-mist">
                Our <Link href={`/services/${svc.slug}`} className="text-electric underline underline-offset-4">{svc.shortName.toLowerCase()}</Link> service handles exactly this, anywhere in {site.areasLine}. Call or text <a href={site.phoneHref} className="text-electric underline underline-offset-4">{site.phone}</a> for a free quote.
              </p>
            </div>
          </Reveal>
        )}
        <Reveal>
          <h2 className="mt-14 font-display text-xl font-extrabold text-white">More from the blog</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {more.map((x) => (
              <Link key={x.slug} href={`/blog/${x.slug}`} className="cursor-pointer rounded-xl border glass p-5 transition-colors hover:border-electric/60 lift">
                <p className="eyebrow">{x.dateLabel}</p>
                <p className="mt-2 font-display font-bold leading-snug text-white">{x.title}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </article>
      <CTABand />
    </>
  );
}
