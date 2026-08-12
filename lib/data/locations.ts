export type Location = {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  intro: string;
  localIssues: { title: string; body: string }[];
  communities: string[];
  topServices: string[];
};

export const locations: Location[] = [
  {
    slug: "bluffton-sc",
    name: "Pressure Washing in Bluffton, SC",
    shortName: "Bluffton",
    headline: "Bluffton's straight-answer exterior cleaning company.",
    intro:
      "Bluffton is home turf for No BS Power Wash. Between the May River humidity, the shade from mature oaks, and fast-growing communities along 278 and Buckwalter, Bluffton homes collect algae, mildew, and roof streaks faster than almost anywhere in the Lowcountry. We wash houses, roofs, driveways, and screened porches across Bluffton every week, and we know the HOA standards in the gated communities by heart.",
    localIssues: [
      { title: "May River humidity", body: "Constant moisture off the river keeps siding and concrete damp, which is exactly what algae and mildew need. North and east walls in Bluffton neighborhoods are usually the first to turn green." },
      { title: "Oak shade and pollen", body: "Bluffton's tree cover is beautiful and brutal. Shade slows drying, spring pollen coats everything, and screened porches trap the film on every surface." },
      { title: "HOA appearance standards", body: "Sun City, Hampton Lake, and the other plantation communities send exterior-appearance letters. A soft wash usually resolves the notice in a single visit." },
    ],
    communities: ["Sun City Hilton Head", "Palmetto Bluff", "Colleton River", "Belfair", "Berkeley Hall", "Hampton Hall", "Hampton Lake"],
    topServices: ["house-washing", "roof-cleaning", "driveway-concrete-cleaning", "screened-porch-cleaning"],
  },
  {
    slug: "hilton-head-island-sc",
    name: "Pressure Washing on Hilton Head Island, SC",
    shortName: "Hilton Head Island",
    headline: "Island homes fight salt air and algae. We fight back.",
    intro:
      "Hilton Head Island properties deal with everything mainland homes face plus salt air off the Atlantic. Salt film, algae, and mildew build fast on siding, roofs, pool decks, and lanais. We work across the island's plantations and gated communities, for homeowners, realtors prepping listings, and property managers handling turnover cleans between guests.",
    localIssues: [
      { title: "Salt air film", body: "Ocean air leaves a residue that bonds with pollen and mildew. It dulls paint, glass, and railings, and it does not rinse off with a garden hose." },
      { title: "Rental turnover pressure", body: "Vacation properties need to photograph and show perfectly on a schedule. We fit listing shoots and guest turnovers without drama." },
      { title: "Strict plantation standards", body: "Sea Pines, Palmetto Dunes, and the other plantations expect clean exteriors. We know what passes inspection and what gets a letter." },
    ],
    communities: ["Sea Pines", "Palmetto Dunes", "Hilton Head Plantation", "Indigo Run", "Long Cove Club", "Wexford", "Port Royal Plantation"],
    topServices: ["house-washing", "soft-washing", "roof-cleaning", "driveway-concrete-cleaning"],
  },
  {
    slug: "beaufort-sc",
    name: "Pressure Washing in Beaufort, SC",
    shortName: "Beaufort",
    headline: "Historic town. Historic humidity. Modern clean.",
    intro:
      "Beaufort's charm comes with age: older siding, older stucco, older paint. Those surfaces need a gentler hand, which is exactly what soft washing is for. From the historic district to the sea islands and gated communities like Dataw Island, we clean Beaufort homes, porches, and driveways without risking the surfaces that make them special.",
    localIssues: [
      { title: "Older, delicate surfaces", body: "High pressure on aged wood, stucco, or old mortar is a repair bill waiting to happen. Soft washing cleans Beaufort's older homes safely." },
      { title: "Marsh and river moisture", body: "Beaufort is surrounded by water. Shaded marsh-side homes stay damp and grow algae year-round." },
      { title: "Porch culture", body: "Beaufort loves a porch, and porches collect pollen, cobwebs, and mildew. Our porch rinse keeps them usable all season." },
    ],
    communities: ["Dataw Island", "Cat Island", "Coosaw Point", "Habersham"],
    topServices: ["soft-washing", "house-washing", "screened-porch-cleaning"],
  },
  {
    slug: "okatie-sc",
    name: "Pressure Washing in Okatie, SC",
    shortName: "Okatie",
    headline: "Okatie's riverfront communities, kept spotless.",
    intro:
      "Okatie sits between the Okatie River and some of the Lowcountry's most exclusive gated communities. Spring Island, Oldfield, and Callawassie Island homes are big investments with high appearance standards, and the river environment means constant organic growth on siding, roofs, docks, and driveways. We keep Okatie properties looking the way their owners expect.",
    localIssues: [
      { title: "Riverfront growth", body: "Life on the Okatie River means shade, moisture, and algae in every direction. Roof streaks and green siding show up fast here." },
      { title: "High-end finishes", body: "Okatie homes often feature premium stucco, tabby, and custom wood. These surfaces need chemistry and low pressure, not brute force." },
      { title: "Club community standards", body: "Golf and club communities hold members to appearance standards. We handle the exterior side of that requirement." },
    ],
    communities: ["Spring Island", "Oldfield", "Callawassie Island"],
    topServices: ["soft-washing", "roof-cleaning", "house-washing"],
  },
  {
    slug: "hardeeville-sc",
    name: "Pressure Washing in Hardeeville, SC",
    shortName: "Hardeeville",
    headline: "Hardeeville's fastest-growing communities, cleaned right.",
    intro:
      "Hardeeville is booming. Latitude Margaritaville and Riverton Pointe have brought thousands of new homes to the area, and new construction does not stay new-looking for long in Lowcountry humidity. Builders' dust, red clay splatter, and first-year algae all show up fast. We help Hardeeville homeowners keep that new-home look without risking new-home surfaces.",
    localIssues: [
      { title: "New construction residue", body: "Fresh builds carry concrete dust, clay splatter, and construction grime on driveways, walks, and lower siding. A proper first clean sets the baseline." },
      { title: "Active-adult community standards", body: "Margaritaville and Riverton Pointe keep their streetscapes sharp. We work within community rules and schedules." },
      { title: "First-year algae", body: "New siding still grows algae in year one here. Catching it early with a soft wash keeps it from setting in." },
    ],
    communities: ["Latitude Margaritaville", "Riverton Pointe"],
    topServices: ["house-washing", "driveway-concrete-cleaning", "soft-washing"],
  },
  {
    slug: "ridgeland-sc",
    name: "Pressure Washing in Ridgeland, SC",
    shortName: "Ridgeland",
    headline: "Ridgeland properties, same No Games standard.",
    intro:
      "Ridgeland rounds out our core service area. Homes and commercial properties along the 278 and I-95 corridor deal with the same Lowcountry algae, mildew, and pollen as the coast, plus road film for properties near the highway. We bring the same straight pricing and proper methods to Ridgeland that we do in Bluffton and Hilton Head.",
    localIssues: [
      { title: "Road film", body: "Properties near 278 and I-95 collect exhaust and road residue on top of the usual organic growth. It takes the right detergents to release it." },
      { title: "Mixed residential and commercial", body: "Ridgeland jobs range from ranch homes to storefronts. The method changes with the surface, and we price it straight either way." },
      { title: "Shaded rural lots", body: "Wooded lots around Ridgeland stay damp. Expect north walls and roof valleys to show growth first." },
    ],
    communities: ["Knowles Island", "Custer Terrace"],
    topServices: ["house-washing", "pressure-power-washing", "driveway-concrete-cleaning"],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
