import type { Metadata } from "next";
import { Mulish, JetBrains_Mono, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import GlobalShader from "@/components/webgl/GlobalShader";
import { site } from "@/lib/data/site";
import AskNoBS from "@/components/chat/AskNoBS";
import StickyCommunities from "@/components/sections/StickyCommunities";
import ScrollProgress from "@/components/motion/ScrollProgress";

const mulish = Mulish({ subsets: ["latin"], variable: "--font-mulish", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap", preload: false });
const hero = Barlow_Condensed({ subsets: ["latin"], variable: "--font-barlow", display: "swap", weight: ["700", "800", "900"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `No BS Power Wash | No Games. Just Clean. | Bluffton & Hilton Head SC`,
    template: `%s | No BS Power Wash`,
  },
  description:
    "Professional pressure washing, power washing, and soft washing in Bluffton, Hilton Head Island, and Beaufort SC. Quality results without the BS. Call or text 843-321-9345 for a free quote.",
  openGraph: {
    siteName: site.name,
    title: "No BS Power Wash | No Games. Just Clean.",
    description: "Pressure washing and soft washing across the South Carolina Lowcountry. Call or text 843-321-9345 for a free quote.",
    url: site.url,
    type: "website",
    locale: "en_US",
    images: [{ url: "/social-share.webp", width: 1200, height: 630, alt: "No BS Power Wash: No Games. Just Clean." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "No BS Power Wash | No Games. Just Clean.",
    description: "Pressure washing and soft washing across the South Carolina Lowcountry.",
    images: ["/social-share.webp"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description:
    "Pressure washing, power washing, and soft washing for homes and businesses in Bluffton, Hilton Head Island, and Beaufort SC.",
  url: site.url,
  telephone: "+1-843-321-9345",
  email: site.email,
  founder: { "@type": "Person", name: site.owner },
  areaServed: site.areas.map((a) => ({ "@type": "City", name: a })),
  slogan: site.tagline,
  image: `${site.url}/brand/nobs-logo.webp`,
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mulish.variable} ${jetbrains.variable} ${hero.variable}`}>
      <body className="min-h-screen bg-ink text-white antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        {/* Global kinetic shader: fixed behind every page, variant routed per path */}
        <GlobalShader />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-electric focus:px-4 focus:py-2 focus:text-ink">
          Skip to content
        </a>
        <Nav />
        <ScrollProgress />
        <main id="main" className="relative">{children}</main>
        <Footer />
        <AskNoBS />
        <StickyCommunities />
      </body>
    </html>
  );
}
