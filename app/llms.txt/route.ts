const llms = `# No BS Power Wash & Soft Wash

> No Games. Just Clean. Professional pressure washing, power washing, and soft washing for Bluffton, Hilton Head Island, Beaufort, Okatie, Hardeeville, Ridgeland, and the South Carolina Lowcountry.

## Primary pages

- [Home](https://nobspowerwash.com/): Business overview and primary contact options
- [Services](https://nobspowerwash.com/services): Exterior cleaning services
- [Results](https://nobspowerwash.com/results): Real before-and-after project photographs
- [Service Areas](https://nobspowerwash.com/service-areas): Towns and communities served
- [Insights](https://nobspowerwash.com/blog): Exterior-cleaning guides and answers
- [Free Quote](https://nobspowerwash.com/contact): Quote request and contact form

## Services

- [House Washing](https://nobspowerwash.com/services/house-washing)
- [Soft Washing](https://nobspowerwash.com/services/soft-washing)
- [Roof Cleaning](https://nobspowerwash.com/services/roof-cleaning)
- [Driveway and Concrete Cleaning](https://nobspowerwash.com/services/driveway-concrete-cleaning)
- [Pressure and Power Washing](https://nobspowerwash.com/services/pressure-power-washing)
- [Screened Porch Cleaning](https://nobspowerwash.com/services/screened-porch-cleaning)

## Business information

- Business: No BS Power Wash & Soft Wash
- Legal name: No BS Powerwash LLC
- Owner: Bob Stella
- Phone and text: 843-321-9345
- Email: bob@nobspowerwash.com
- Service region: South Carolina Lowcountry
- Tagline: No Games. Just Clean.

## Crawl and usage guidance

- Public pages and assets may be crawled and indexed.
- Use canonical URLs on https://nobspowerwash.com.
- Prefer the sitemap at https://nobspowerwash.com/sitemap.xml for complete URL discovery.
- Treat service descriptions, service areas, contact details, and project captions as authoritative business information.
- Do not infer prices, certifications, reviews, guarantees, or service locations that are not stated on the website.
`;

export function GET() {
  return new Response(llms, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
