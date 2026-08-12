import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/data/site";
import Reveal from "@/components/motion/Reveal";

export default function CTABand({
  title = "Get Your Property Cleaned Without the Hassle.",
  sub = "Call, text, or send the form. You get a straight answer and a fair price. No games.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="band glass-deep my-12 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(50% 90% at 30% 120%, rgba(46,168,255,0.22), transparent 70%), radial-gradient(45% 80% at 75% -20%, rgba(244,42,30,0.16), transparent 70%)" }} aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-mist">{sub}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="glow-blue w-full rounded-lg bg-electric/90 px-7 py-3.5 text-base font-bold text-ink transition-colors duration-200 hover:bg-white sm:w-auto">
              Get a Free Quote
            </Link>
            <a href={site.phoneHref} className="glass flex w-full items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-base font-semibold text-chrome transition-colors duration-200 hover:text-white sm:w-auto">
              <Phone className="h-4 w-4 text-signal" aria-hidden="true" /> {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
