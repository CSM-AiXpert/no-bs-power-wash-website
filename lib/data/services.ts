export type ServiceFAQ = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: "home" | "droplets" | "roof" | "car" | "spray" | "porch";
  tagline: string;
  description: string;
  solves: string[];
  surfaces: string[];
  methodNote: string;
  process: { title: string; body: string }[];
  faqs: ServiceFAQ[];
  relatedBlogSlugs: string[];
  images: string[];
  pairs: string[];
};

export const services: Service[] = [
  {
    slug: "house-washing",
    name: "House Washing in Bluffton & the Lowcountry",
    shortName: "House Washing",
    icon: "home",
    tagline: "Kill the streaks, not the siding.",
    description:
      "Black streaks, green algae film, and that dull gray cast on your siding are living growth, not dirt. We wash Lowcountry homes with a soft-wash process that removes the growth at the root instead of blasting it with pressure your siding was never designed to take.",
    solves: [
      "Black and green algae streaks on vinyl, Hardie board, and stucco",
      "Mildew on shaded north and east walls that never dry out",
      "Oxidation dullness that makes a clean house look tired",
      "Cobwebs, pollen film, and wasp dirt around trim and soffits",
    ],
    surfaces: ["Vinyl siding", "Fiber cement (Hardie board)", "Stucco", "Painted wood", "Brick exteriors"],
    methodNote:
      "High pressure on siding forces water behind the boards, scars stucco, and strips paint. A proper house wash uses low pressure and the right cleaning solution so the chemistry does the work, not the nozzle.",
    process: [
      { title: "Walkaround", body: "We check siding type, problem walls, plants, outlets, and anything that needs extra care before a drop of water moves." },
      { title: "Soft-wash application", body: "A low-pressure cleaning solution is applied and given time to break down algae and mildew at the root." },
      { title: "Gentle rinse", body: "Everything is rinsed top to bottom at garden-hose-level pressure, including windows, trim, and entry areas." },
      { title: "Final check", body: "We walk the property with you and hit any spot that needs a second pass before we pack up." },
    ],
    faqs: [
      {
        q: "Will pressure washing damage my siding?",
        a: "It can, which is why we do not pressure wash siding. House washing is done with low pressure and a cleaning solution. You get a cleaner result with zero risk of water forced behind the siding or etched stucco.",
      },
      {
        q: "How often should a Lowcountry home be washed?",
        a: "Most homes in Bluffton and Hilton Head do well with a wash every 12 to 24 months. Heavily shaded lots and north-facing walls may need attention sooner because algae grows faster where surfaces stay damp.",
      },
      {
        q: "Are the cleaning solutions safe for plants and pets?",
        a: "We wet down landscaping before, during, and after the wash and rinse everything thoroughly. Once the job is done and surfaces are dry, the yard is back to normal for kids and pets.",
      },
    ],
    relatedBlogSlugs: ["why-lowcountry-homes-turn-green", "soft-wash-vs-pressure-wash", "hoa-letter-exterior-cleaning"],
    images: ["vinyl-siding-free-of-algae-after-a-soft-wash.webp", "long-siding-wall-even-and-bright-after-washing.webp", "garage-side-wall-bright-white-after-a-house-wash.webp"],
    pairs: ["siding-2022", "siding-green", "siding-wall", "siding-2023", "siding-may"],
  },
  {
    slug: "soft-washing",
    name: "Soft Washing: Deep Clean Without the Damage",
    shortName: "Soft Washing",
    icon: "droplets",
    tagline: "Chemistry does the work. Water just rinses.",
    description:
      "Soft washing is the professional answer for delicate exterior surfaces: low pressure plus a purpose-mixed cleaning solution that kills algae, mildew, and bacteria instead of just smearing them around. It cleans deeper and the results last longer than pressure alone.",
    solves: [
      "Organic growth that comes right back after a blast-and-go pressure job",
      "Surfaces that cannot handle high PSI: roofs, stucco, painted wood, screens",
      "Black roof streaks caused by Gloeocapsa magma algae",
      "Embedded grime in textured or porous surfaces",
    ],
    surfaces: ["Roof shingles and metal", "Stucco and EIFS", "Vinyl and painted siding", "Screened enclosures", "Fences and wood"],
    methodNote:
      "Pressure removes the visible top layer of growth and leaves the roots alive. Soft washing kills the organism, which is why soft-washed surfaces typically stay clean far longer between services.",
    process: [
      { title: "Surface assessment", body: "We identify the surface material and the type of growth so the solution strength matches the job, not a guess." },
      { title: "Protect and pre-wet", body: "Plants, grass, and sensitive areas are watered down so the solution never sits on your landscaping." },
      { title: "Low-pressure application", body: "The cleaning mix is applied at low pressure and allowed to dwell so it can kill growth at the root." },
      { title: "Rinse and neutralize", body: "Surfaces and landscaping are rinsed clean. You get the result of a deep clean with none of the pressure risk." },
    ],
    faqs: [
      {
        q: "Is soft washing just a weak pressure wash?",
        a: "No. It is a different method entirely. The cleaning solution does the heavy lifting at low pressure, so it is both safer for the surface and more effective against living growth.",
      },
      {
        q: "How long do soft-wash results last?",
        a: "Because the growth is killed rather than scattered, soft-washed roofs and siding commonly stay clean two to four times longer than surfaces cleaned with pressure alone. Shade and tree cover still matter.",
      },
      {
        q: "What surfaces need soft washing instead of pressure?",
        a: "Roof shingles, stucco, EIFS, painted wood, older mortar, screens, and anything with a finish that can etch or strip. When in doubt, soft wash is the safe call.",
      },
    ],
    relatedBlogSlugs: ["soft-wash-vs-pressure-wash", "black-streaks-on-roof", "why-lowcountry-homes-turn-green"],
    images: ["metal-roof-with-grime-streaks-being-treated-during-a-roof-cleaning.webp", "white-metal-roof-being-soft-washed.webp", "wood-fence-boards-clean-after-washing.webp"],
    pairs: ["fence-algae", "siding-green"],
  },
  {
    slug: "roof-cleaning",
    name: "Roof Cleaning Without the Pressure",
    shortName: "Roof Cleaning",
    icon: "roof",
    tagline: "Those black streaks are algae. We evict them.",
    description:
      "The black streaks running down Lowcountry roofs are a living algae called Gloeocapsa magma, and it eats the limestone filler in your shingles. We clean roofs with a manufacturer-approved soft-wash method: no walking all over your roof, no high pressure, no voided warranty.",
    solves: [
      "Black streaking and staining on shingle roofs",
      "Green algae and mildew on metal roofs",
      "Roof discoloration that drags down curb appeal and listing photos",
      "Growth that shortens shingle life by holding moisture",
    ],
    surfaces: ["Asphalt shingles", "Metal roofing", "Tile (method adjusted per material)"],
    methodNote:
      "Never let anyone pressure wash a shingle roof. High pressure strips the granules that protect the shingle and can void the manufacturer warranty. The correct method is a low-pressure soft wash, which is what shingle makers themselves recommend.",
    process: [
      { title: "Roof inspection", body: "We check the roof material, pitch, and the extent of the growth, and flag anything that looks like a repair issue rather than a cleaning issue." },
      { title: "Property protection", body: "Gutters, plants, and surrounding surfaces are pre-wet and managed so runoff is controlled the whole time." },
      { title: "Soft-wash treatment", body: "The roof is treated from the ladder or ridge line with a low-pressure application that kills the algae at the root." },
      { title: "Rinse and review", body: "Metal roofs are rinsed the same day. On shingles, the treatment finishes the job as it dries, and we confirm the result with you." },
    ],
    faqs: [
      {
        q: "Will cleaning damage my shingles?",
        a: "Not with the right method. We never use high pressure on shingles. The soft-wash treatment is the approach shingle manufacturers specify for exactly this problem.",
      },
      {
        q: "Do the black streaks come back?",
        a: "Eventually, yes, because the algae is airborne and the Lowcountry climate feeds it. A proper soft wash kills the existing colony at the root, so a treated roof typically stays clean for years rather than months.",
      },
      {
        q: "Can you clean a metal roof?",
        a: "Yes. Metal roofs in this area grow a dull green-gray film, and they clean up dramatically. We wash and rinse them same-day so you see the full result before we leave.",
      },
    ],
    relatedBlogSlugs: ["black-streaks-on-roof", "soft-wash-vs-pressure-wash", "roof-cleaning-safety"],
    images: ["white-metal-roof-being-soft-washed.webp", "metal-roof-with-grime-streaks-being-treated-during-a-roof-cleaning.webp"],
    pairs: [],
  },
  {
    slug: "driveway-concrete-cleaning",
    name: "Driveway & Concrete Cleaning",
    shortName: "Concrete Cleaning",
    icon: "car",
    tagline: "Concrete is where pressure belongs.",
    description:
      "Driveways, walkways, patios, pool decks, and pavers take the most abuse on your property: tire marks, mildew, algae slick, rust spots, and years of ground-in grime. We clean concrete with professional surface cleaners for an even, streak-free finish, not zebra stripes.",
    solves: [
      "Black mildew and algae film that turns shaded concrete slick",
      "Tire tracks, drips, and ground-in dirt on driveways",
      "Mottled, darkened pavers with grime in the joints",
      "Slippery pool decks and patios that look older than they are",
    ],
    surfaces: ["Concrete driveways", "Walkways and sidewalks", "Paver patios and paths", "Pool decks", "Porch and entry slabs"],
    methodNote:
      "A wand alone leaves stripes and missed patches. We use a rotary surface cleaner for the main passes so the whole slab cleans evenly, then detail edges and rinse everything down.",
    process: [
      { title: "Prep", body: "Vehicles, planters, and furniture are moved or worked around, and loose debris is cleared." },
      { title: "Pre-treatment", body: "A cleaning solution is applied to break down the organic growth and lift the grime before the pressure pass." },
      { title: "Surface cleaning", body: "A rotary surface cleaner makes overlapping passes for a uniform finish across the whole slab." },
      { title: "Detail and rinse", body: "Edges, corners, and joints get a wand pass, then everything is rinsed clean so no dirty water dries back onto the surface." },
    ],
    faqs: [
      {
        q: "Why does my concrete turn black in the shade?",
        a: "That is mildew and algae feeding on moisture and organic debris. Shaded Lowcountry concrete stays damp, so it grows fast. Cleaning plus sunlight keeps it under control.",
      },
      {
        q: "Will cleaning make my old concrete look new?",
        a: "It will look dramatically better. Cleaning removes the growth and grime, which is most of what makes concrete look old. Stains that have chemically altered the concrete itself, like deep rust or oil, improve but may not vanish completely.",
      },
      {
        q: "Is it safe for pavers and their joint sand?",
        a: "Yes, with the right approach. We adjust pressure and technique for pavers so the surface comes clean without blasting out the joints or chipping the faces.",
      },
    ],
    relatedBlogSlugs: ["slippery-concrete-lowcountry", "paver-cleaning-joint-sand", "diy-pressure-washing-mistakes"],
    images: ["garage-driveway-freshly-pressure-washed.webp", "pool-deck-clean-and-uniform-after-washing.webp", "paver-patio-bright-and-clean-after-washing.webp"],
    pairs: ["paver-walkway", "paver-patio", "front-walk", "porch-landing", "pool-deck", "patio-screened", "fence-gray"],
  },
  {
    slug: "pressure-power-washing",
    name: "Pressure & Power Washing",
    shortName: "Pressure Washing",
    icon: "spray",
    tagline: "Full pressure where it belongs. None where it does not.",
    description:
      "Pressure washing and power washing use high-pressure water to clean hard, durable surfaces. It is the right tool for concrete, brick, and heavy buildup, and the wrong tool for roofs, siding, and screens. We match the method to the material so you get maximum clean with zero damage.",
    solves: [
      "Heavy grime and buildup on hard surfaces",
      "Mud, clay, and debris tracked onto concrete and brick",
      "Weathered, gray wood on fences that needs a controlled wash",
      "Commercial flatwork: walkways, entries, and pads",
    ],
    surfaces: ["Concrete and exposed aggregate", "Brick and block walls", "Stone and masonry", "Fences (controlled pressure)", "Equipment pads and curb lines"],
    methodNote:
      "Pressure is a tool, not a personality trait. Durable flatwork gets full pressure through a surface cleaner. Anything delicate gets soft washed. The skill is knowing which is which before the trigger is pulled.",
    process: [
      { title: "Material check", body: "We confirm the surface can take pressure and choose the tip, distance, and PSI accordingly." },
      { title: "Pre-treat", body: "Organic growth and heavy grime get a cleaning-solution pre-treatment so the pressure pass is faster and more even." },
      { title: "Clean", body: "Surface cleaners and wand work in overlapping passes, with extra attention on joints, edges, and stained areas." },
      { title: "Rinse and tidy", body: "All runoff and lifted debris are rinsed away, and the area is left clean, not just the slab." },
    ],
    faqs: [
      {
        q: "What is the difference between pressure washing and power washing?",
        a: "Power washing adds heat to the water. For most residential work the terms are used interchangeably, and the real question is always the same: is this surface a pressure surface or a soft-wash surface.",
      },
      {
        q: "Can pressure washing damage concrete?",
        a: "Done wrong, yes: too much pressure too close can etch the cream layer off the slab. Done right, with a surface cleaner at the correct PSI, it is the safest and most effective way to clean concrete.",
      },
      {
        q: "Do you clean wood fences with pressure?",
        a: "With controlled, reduced pressure and the right tip, yes. Gray, weathered fence boards clean up well, but blasting soft wood at full pressure will fur and splinter it, so the pressure is dialed down for wood.",
      },
    ],
    relatedBlogSlugs: ["soft-wash-vs-pressure-wash", "diy-pressure-washing-mistakes", "slippery-concrete-lowcountry"],
    images: ["rotary-surface-cleaner-working-a-side-walkway.webp", "concrete-pad-being-cleaned-with-pressure-washing-equipment-on-site.webp", "pressure-washing-rig-set-up-at-a-large-home-driveway-project.webp"],
    pairs: ["side-walkway", "block-wall", "fence-algae"],
  },
  {
    slug: "screened-porch-cleaning",
    name: "Screened Porch & Enclosure Cleaning",
    shortName: "Porch Cleaning",
    icon: "porch",
    tagline: "Pollen, mildew, and bug dirt: gone.",
    description:
      "Screened porches are the best rooms in a Lowcountry house, and the dirtiest. Screens trap pollen, mildew creeps across the frames, and the floor collects everything the yard throws at it. We clean and rinse screened enclosures gently so the screens, frames, and floors all come back at once.",
    solves: [
      "Green pollen film caked into screen mesh every spring",
      "Mildew on aluminum frames, rails, and ceiling panels",
      "Dirty porch floors, drips, and tracked-in grime",
      "Cobwebs and insect debris in corners and ceiling lines",
    ],
    surfaces: ["Screen mesh and spline", "Aluminum frames and rails", "Porch floors: concrete, tile, painted", "Ceiling panels and beams"],
    methodNote:
      "Screens tear under pressure and frames dent. Enclosures are washed with low pressure and soft bristle work where needed, then rinsed inside and out so no residue is left behind on the screens.",
    process: [
      { title: "Furniture and prep", body: "Furniture is shifted or covered and anything sensitive is moved before washing starts." },
      { title: "Gentle wash", body: "Frames, screens, and ceilings are washed with a mild solution at low pressure so the mesh and finishes stay intact." },
      { title: "Floor cleaning", body: "The porch floor gets the appropriate treatment for its material, from soft rinse to a full concrete clean." },
      { title: "Final rinse", body: "Everything is rinsed top to bottom, inside and out, so the porch is ready to use as soon as it dries." },
    ],
    faqs: [
      {
        q: "Will the cleaning solution damage my screens?",
        a: "No. Screens are washed at low pressure with a mild mix, which is exactly what the mesh and spline can handle. High pressure is what damages screens, and we do not use it on enclosures.",
      },
      {
        q: "How often should a screened porch be cleaned?",
        a: "Once a year after pollen season is the sweet spot for most Lowcountry porches. Porches near trees, water, or marsh may want a mid-season rinse as well.",
      },
      {
        q: "Can you clean the porch ceiling and fans too?",
        a: "Ceiling panels and beams, yes. We rinse around fans carefully but do not wash electrical fixtures directly; we will flag anything that needs an electrician rather than a hose.",
      },
    ],
    relatedBlogSlugs: ["screened-porch-pollen-season", "why-lowcountry-homes-turn-green", "pre-listing-exterior-cleaning"],
    images: ["screened-patio-concrete-floor-clean-after-washing.webp", "long-covered-porch-floor-clean-and-glossy-after-washing.webp", "white-porch-railing-freshly-cleaned-after-washing.webp"],
    pairs: ["patio-screened", "porch-balcony"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
