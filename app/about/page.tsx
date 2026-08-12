import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import CTABand from "@/components/layout/CTABand";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About | No BS Power Wash, Bluffton SC",
  description:
    "No BS Power Wash & Soft Wash is owner Bob Stella's Lowcountry exterior cleaning company. Straight answers, the right method for every surface, and results you can see.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pb-20 pt-32 sm:px-6">
        <Reveal>
          <p className="eyebrow">About</p>
          <h1 className="mt-3 font-hero text-4xl font-extrabold text-white sm:text-5xl">
            The name is the whole business model.
          </h1>
        </Reveal>
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.05}>
            <Image src="/brand/nobs-logo.webp" alt="No BS Power Wash emblem" width={1024} height={1024}
              className="mx-auto w-full max-w-sm" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-chrome">
              <p>
                {site.name} is owned and operated by <strong className="text-white">{site.owner}</strong>. When you call <a href={site.phoneHref} className="text-electric underline underline-offset-4">{site.phone}</a>, you talk to the person who will actually show up and do the work.
              </p>
              <p>
                The company exists because exterior cleaning has a honesty problem. Too many contractors blast every surface with the same high pressure, quote one number and charge another, or disappear when a spot needs a second pass. The name is a promise: no games with the price, no games with the method, no games with the schedule. Just clean.
              </p>
              <p>
                We serve {site.areasLine}. These are our neighbors, our realtors, our HOAs. Lowcountry humidity, algae, and pollen are hard on homes, and the wrong cleaning method is even harder. We soft wash what pressure would damage and bring real pressure where the surface can take it.
              </p>
              <p>
                Every job ends the same way: a walkthrough with you and our <strong className="text-white">100% satisfaction guarantee</strong>. If something is not right, we make it right.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <CTABand title="Get a straight answer on your clean." sub={`Call or text ${site.phone}, ask No BS, or send the quote form for a fast response.`} />
    </>
  );
}
