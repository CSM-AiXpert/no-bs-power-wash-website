# Research Notes — No BS Power Wash Rebuild (Aug 12, 2026)

## Business fact verification

| Fact | Source |
|---|---|
| Name: No BS Power Wash & Soft Wash | Owner-supplied brand sheet / flyer |
| Owner: Bob Stella | Owner-supplied |
| Phone 843-321-9345, bob@nobspowerwash.com | Flyer + live site nobspowerwash.com |
| Areas: Bluffton, Hilton Head Island, Beaufort SC | Owner + live site |
| Tagline "No Games. Just Clean." | Logo banner ("NO GAMES - JUST CLEAN!"), normalized per spec |
| 100% satisfaction guarantee | Flyer copy |
| "We don't cut corners, we clean them." | Flyer copy |
| Referral: $25 credit, $100 Visa option after 4 | Owner-supplied |
| Services: house washing, soft washing, roof cleaning, driveway/concrete, pressure/power washing, screened porch cleaning | Flyer "WE CLEAN" list + live site |

Discrepancy: none blocking. Flyer QR is broken and was excluded from all pages by rule.

## Before/after pairing method

Pairs in `lib/data/results.ts` were formed from same-day filenames (consecutive capture timestamps) and matching scene geometry (siding profile, window placement, ground lines). Images without a legitimate partner are used only in the completed-projects gallery, never labeled before/after.

## Competitive gap summary (Lowcountry exterior cleaning)

Competitive set reviewed: Premier Softwash, Southern Style SoftWash, Bluffton Soft Wash / Bluffton Window Cleaning, plus generic map-pack pressure washers in Bluffton/Hilton Head.

Observed gaps the content plan attacks:

1. **Method confusion.** Competitors say "soft wash" constantly but rarely explain pressure vs. power vs. soft in plain language. -> `soft-wash-vs-pressure-wash`.
2. **Roof streak education.** Most sites say "we clean roofs" without explaining gloeocapsa magma or why pressure voids warranties. -> `black-streaks-on-roof`.
3. **HOA letters.** High-anxiety, high-intent query; almost no competitor addresses it directly. -> `hoa-letter-exterior-cleaning`.
4. **Listing prep for realtors/sellers.** Big local market (Hilton Head especially); competitors under-serve it. -> `exterior-cleaning-before-listing-your-home`.
5. **Maintenance cadence.** Nobody publishes a local schedule; pollen + humidity make timing non-obvious. -> `lowcountry-exterior-cleaning-calendar`, `how-often-clean-driveway-lowcountry`.
6. **DIY mistakes.** Rented machines cause real damage; competitors avoid the topic. -> `diy-pressure-washing-mistakes`.
7. **Screened porches.** Universally offered, never explained. -> `screened-porch-pollen-mildew-cleaning`.
8. **Why growth comes back.** Mechanism content builds trust. -> `why-lowcountry-homes-turn-green`.

## Blog publication sequence

Weekly cadence Jun 17 -> Aug 12, 2026 (newest on top), per spec section 15. No future dates.

## Asset pipeline

- 50 source photos (JPG, up to 6.7MB) -> WebP q82, max dimension 2000px (`public/results/`, ~36MB total)
- Logo: black background removed via edge flood-fill keying (PIL), alpha verified programmatically; interior dark elements (banner, shield mesh) preserved. rembg/u2net was tried first and retained the black background, so it was not used.
- Work video: H.264 CRF 28, max width 1600, audio stripped, faststart (`public/media/nobs-work-clip.mp4`)

## Known deliberate trade-offs

- Quote form uses `mailto:` composition (no backend in this deployment). Phone/text CTA is always adjacent as the low-friction path.
- OG image uses the logo PNG; per-page article OG uses the article photo.
