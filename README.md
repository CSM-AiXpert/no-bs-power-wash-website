# No BS Power Wash Website

Production rebuild of nobspowerwash.com. **No Games. Just Clean.**

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript (strict)
- Tailwind CSS v4 (theme tokens in `app/globals.css`)
- Framer Motion (scroll reveals, hover micro-motion)
- Raw WebGL fragment-shader hero (`components/webgl/WaterShader.tsx`): DPR-capped, pauses off-screen, `prefers-reduced-motion` + CSS fallback

## Commands

```bash
npm install
npm run dev        # dev server
npm run build      # production build
npm run start -- -p 3009   # serve production build on :3009
```

## Structure

- `app/` routes: home, services (+6 detail pages), results, about, blog (+9 articles), service-areas, contact, privacy, sitemap, robots
- `lib/data/` single source of truth: `site.ts` (business facts), `services.ts`, `results.ts` (honest before/after pairs + gallery), `blog.ts` (9 dated articles)
- `public/brand/` logo (background removed, transparent WebP/PNG)
- `public/results/` 50 WebP project photos (source JPGs converted q82, max 2000px)
- `public/media/nobs-work-clip.mp4` compressed work clip

## Content rules (hard)

- No em dashes in copy. No emoji icons (Lucide only).
- No fabricated stats, reviews, certifications, or prices.
- Before/after pairs only where scene geometry matches (see RESEARCH_NOTES.md).
- Flyer QR code is broken: never publish a QR.
- Referral program: $25 credit per referral, $100 Visa card option after 4.

## Contact channels

Quote form composes a prefilled email to bob@nobspowerwash.com (no backend). Phone/text 843-321-9345 is the primary fast channel.
