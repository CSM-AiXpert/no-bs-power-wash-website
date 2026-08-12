import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { nav, site } from "@/lib/data/site";
import { FacebookIcon, LinkedInIcon, NextdoorIcon, GoogleIcon } from "@/components/ui/SocialIcons";
import { locations } from "@/lib/data/locations";

const iconMap: Record<string, (p: { className?: string }) => React.ReactNode> = {
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
  nextdoor: NextdoorIcon,
  google: GoogleIcon,
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#03060b]">
      <div className="footer-outline-mark pointer-events-none absolute inset-0 z-0 flex items-center justify-center gap-[0.06em] whitespace-nowrap" aria-hidden="true">
        <span className="footer-outline-no">NO</span>
        <span className="footer-outline-bs">BS</span>
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/brand/nobs-logo.webp" alt="No BS Power Wash logo" width={56} height={56} className="h-14 w-auto" />
            <div>
              <p className="font-display text-base font-extrabold uppercase tracking-wide text-white">{site.name}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
            Professional pressure washing, power washing, and soft washing for {site.areasLine}.
          </p>
          <div className="mt-5 flex items-center gap-5">
            {site.socials.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`No BS Power Wash on ${s.label}`}
                  className="cursor-pointer opacity-90 transition-all duration-200 hover:scale-110 hover:opacity-100">
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-white">Explore</p>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-sm text-mist transition-colors hover:text-white">{n.label}</Link>
              </li>
            ))}
            <li><Link href="/service-areas" className="text-sm text-mist transition-colors hover:text-white">Service Areas</Link></li>
            <li><Link href="/privacy" className="text-sm text-mist transition-colors hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-sm text-mist transition-colors hover:text-white">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-white">Get a Free Quote</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2 text-chrome transition-colors hover:text-white">
                <Phone className="h-4 w-4 text-electric" aria-hidden="true" /> {site.phone} <span className="text-mist">(call or text)</span>
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="flex items-center gap-2 text-chrome transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-electric" aria-hidden="true" /> {site.email}
              </a>
            </li>
          </ul>
          <p className="mt-5 text-xs text-mist">{site.tagline}</p>
        </div>
      </div>
      <div className="relative z-10 border-t border-white/10">
        <nav aria-label="Service areas" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs font-semibold uppercase tracking-[0.15em]">
            {locations.map((l) => (
              <Link key={l.slug} href={`/service-areas/${l.slug}`} className="text-mist transition-colors hover:text-white">
                {l.shortName}
              </Link>
            ))}
          </p>
        </nav>
      </div>
      <div className="relative z-10 border-t border-white/10 py-5 text-center text-xs text-mist">
        &copy; {new Date().getFullYear()} {site.name}. {site.tagline}
      </div>
    </footer>
  );
}
