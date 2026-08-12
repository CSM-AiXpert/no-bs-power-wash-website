import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import QuoteForm from "@/components/ui/QuoteForm";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/data/site";
import { FacebookIcon, LinkedInIcon, NextdoorIcon, GoogleIcon } from "@/components/ui/SocialIcons";

export const metadata: Metadata = {
  title: "Get a Free Quote | No BS Power Wash, Bluffton SC",
  description:
    "Request a free exterior cleaning quote from No BS Power Wash. Call or text 843-321-9345 or send the form. Serving Bluffton, Hilton Head Island, and Beaufort SC.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6">
      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Free quote</p>
          <h1 className="mt-3 font-hero text-4xl font-extrabold text-white sm:text-5xl">Get a straight answer on your clean.</h1>
          <p className="mt-5 max-w-lg text-lg text-mist">
            Tell us what you are looking at. We will tell you what it takes, what it costs, and when we can do it. No pressure, no games.
          </p>
          <div className="mt-10 space-y-5">
            <a href={site.phoneHref} className="flex items-center gap-4 rounded-xl border glass p-5 transition-colors hover:border-electric/60 lift">
              <Phone className="h-6 w-6 text-electric" aria-hidden="true" />
              <span>
                <span className="block font-display font-bold text-white">Call or text {site.phone}</span>
                <span className="block text-sm text-mist">Fastest way to reach Bob</span>
              </span>
            </a>
            <a href={site.emailHref} className="flex items-center gap-4 rounded-xl border glass p-5 transition-colors hover:border-electric/60 lift">
              <Mail className="h-6 w-6 text-electric" aria-hidden="true" />
              <span>
                <span className="block font-display font-bold text-white">{site.email}</span>
                <span className="block text-sm text-mist">Photos of the problem area welcome</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-xl border glass p-5">
              <MapPin className="h-6 w-6 text-electric" aria-hidden="true" />
              <span>
                <span className="block font-display font-bold text-white">{site.areas.join(" · ")}</span>
                <span className="block text-sm text-mist">And nearby Lowcountry communities</span>
              </span>
            </div>
            <div className="flex items-center gap-5 pt-1">
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`No BS Power Wash on ${s.label}`}
                  className="cursor-pointer opacity-90 transition-all duration-200 hover:scale-110 hover:opacity-100">
                  {s.icon === "facebook" && <FacebookIcon className="h-7 w-7" />}
                  {s.icon === "nextdoor" && <NextdoorIcon className="h-7 w-7" />}
                  {s.icon === "linkedin" && <LinkedInIcon className="h-7 w-7" />}
                  {s.icon === "google" && <GoogleIcon className="h-7 w-7" />}
                </a>
              ))}
              <span className="pl-1 text-sm text-mist">Reviews and updates</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
