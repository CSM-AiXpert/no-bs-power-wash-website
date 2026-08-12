# No BS Power Wash Website QA Report

Audit date: August 12, 2026

## Release status

- TypeScript: passed with zero errors
- Next.js production build: passed
- Static generation: 37 routes generated
- Representative HTTP routes: 16/16 returned HTTP 200
- Mobile Lighthouse: Performance 94, Accessibility 96, Best Practices 100, SEO 100
- Mobile field proxies: FCP 1.2 s, LCP 3.1 s, CLS 0.001, TBT 0 ms, Speed Index 1.2 s

## Mobile-first performance work

- Disabled continuous WebGL fragment-shader rendering below 768 px and retained the CSS water fallback.
- Removed initial Framer Motion opacity gating from the homepage hero to improve first paint and LCP.
- Kept below-the-fold viewport-triggered reveals and reduced-motion behavior.
- Optimized result images are served through Next Image with responsive sizes.
- Shader DPR is capped and pauses when hidden or not visible on supported desktop widths.

## Responsive and interaction checks

- Header collapses to a mobile menu.
- Primary CTAs use touch-friendly dimensions.
- No intentional horizontal scrolling is used outside controlled marquees.
- Ask No BS uses an 88 px circular touch target, 12 animated bubbles, a pulsing blue stroke, red hover state, and reduced-motion handling.
- Sticky neighborhood strip reserves page-bottom space and uses neighborhood names only.
- Footer service-area links wrap safely at narrow widths.
- Before/after sliders expose labeled range controls.

## Accessibility

- Skip link is present.
- Main navigation and service-area navigation are labeled.
- Forms have labels or accessible names.
- Interactive menus expose expanded state.
- Images have alt text.
- Visible focus styles are defined.
- Motion is suppressed when `prefers-reduced-motion: reduce` is enabled.

## Search and sharing

- Canonical metadata points to `https://nobspowerwash.com`.
- Dedicated 1200 x 630 Open Graph/Twitter image is configured.
- Transparent favicon, Apple touch icon, and app icon are configured.
- `robots.txt`, `sitemap.xml`, and `llms.txt` return HTTP 200.
- Service, article, location, and image discovery URLs are represented in the sitemap.
- Six local service-area landing pages are statically generated.

## Visual verification

- Exact supplied logo is used and has no CSS image filter.
- Result and blog photographs use no color filter or blend mode.
- Hero divider overlay and global dark overlay were removed.
- Cards use visible 2 px strokes and reduced-opacity glass fills.
- Footer includes a large outline-only NO/BS background mark with blue NO and red BS.

## Known production note

Performance was measured against the local optimized production server. CDN caching on Vercel may improve asset delivery further. Real-user Core Web Vitals should be monitored after the domain receives traffic.
