"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { nav, site } from "@/lib/data/site";
import { services } from "@/lib/data/services";

const linkCls =
  "text-sm font-medium text-chrome transition-colors duration-200 hover:text-signal hover:underline hover:decoration-electric hover:decoration-2 hover:underline-offset-8";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-white/10 bg-ink/60 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3" aria-label="No BS Power Wash home">
          <Image src="/brand/nobs-logo.webp" alt="No BS Power Wash logo" width={44} height={44} className="h-11 w-auto" priority />
          <span className="hidden sm:block">
            <span className="block font-display text-sm font-extrabold uppercase tracking-wider text-white transition-colors duration-200 group-hover:text-signal">No BS Power Wash</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-electric">No Games. Just Clean.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((n) =>
            n.label === "Services" ? (
              <div key={n.href} className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}>
                <Link href={n.href} className={`${linkCls} flex items-center gap-1`} aria-expanded={servicesOpen} aria-haspopup="true">
                  Services
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </Link>
                {/* cascading dropdown */}
                <div className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200 ${servicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}>
                  <div className="glass-deep w-64 rounded-2xl p-2">
                    {services.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setServicesOpen(false)}
                        className="block rounded-xl px-4 py-2.5 transition-colors duration-150 hover:bg-white/5">
                        <span className="block text-sm font-bold text-white hover:text-signal">{s.shortName}</span>
                        <span className="block text-xs text-mist">{s.tagline}</span>
                      </Link>
                    ))}
                    <Link href="/services" onClick={() => setServicesOpen(false)}
                      className="mt-1 block rounded-xl border-t border-white/10 px-4 py-2.5 text-sm font-semibold text-electric hover:bg-white/5">
                      All services &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={n.href} href={n.href} className={linkCls}>
                {n.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <a href={site.phoneHref} className={`${linkCls} hidden items-center gap-2 lg:flex`}>
            <Phone className="h-4 w-4 text-electric" aria-hidden="true" />
            {site.phone}
          </a>
          <Link href="/contact" className="hidden rounded-lg bg-electric/90 px-4 py-2 text-sm font-bold text-ink transition-colors duration-200 hover:bg-signal hover:text-white sm:block">
            Get a Free Quote
          </Link>
          <button className="cursor-pointer rounded-md p-2 text-chrome md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-ink/80 px-4 pb-6 pt-2 backdrop-blur-xl md:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <div key={n.href}>
              <Link href={n.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 text-base font-medium text-chrome transition-colors hover:text-signal">
                {n.label}
              </Link>
              {n.label === "Services" && (
                <div className="border-b border-white/10 pb-2">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpen(false)}
                      className="block py-2 pl-5 text-sm text-mist transition-colors hover:text-signal">
                      {s.shortName}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href={site.phoneHref} className="mt-4 flex items-center gap-2 font-semibold text-electric">
            <Phone className="h-4 w-4" aria-hidden="true" /> Call or text {site.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
