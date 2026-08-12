import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import { posts } from "@/lib/data/blog";
import { locations } from "@/lib/data/locations";
import { pairs, gallery } from "@/lib/data/results";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const resultImages = [
    ...pairs.flatMap((p) => [`${base}/results/${p.before}`, `${base}/results/${p.after}`]),
    ...gallery.map((g) => `${base}/results/${g.file}`),
  ];

  return [
    { url: base, changeFrequency: "monthly", priority: 1, images: [`${base}/brand/nobs-logo.webp`] },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${base}/results`, changeFrequency: "monthly", priority: 0.8, images: resultImages },
    { url: `${base}/about`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.7 },
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: p.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
      images: [`${base}/results/${p.image}`],
    })),
    { url: `${base}/service-areas`, changeFrequency: "yearly", priority: 0.7 },
    ...locations.map((l) => ({ url: `${base}/service-areas/${l.slug}`, changeFrequency: "yearly" as const, priority: 0.7 })),
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
