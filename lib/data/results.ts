export type ResultImage = {
  file: string;
  alt: string;
  service: string;
  serviceSlug: string;
  width: number;
  height: number;
};

export type BeforeAfterPair = {
  id: string;
  title: string;
  serviceSlug: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

// Honest pairs: same scene geometry verified by visual audit (see RESEARCH_NOTES.md)
export const pairs: BeforeAfterPair[] = [
  {
    id: "siding-2022",
    title: "Vinyl siding, algae streaks removed",
    serviceSlug: "house-washing",
    before: "PXL_20220808_160700576.MP.webp",
    after: "PXL_20220808_165401074.MP.webp",
    beforeAlt: "Beige vinyl siding covered in dark algae and mildew streaks before washing",
    afterAlt: "The same beige vinyl siding bright and clean after a soft wash",
  },
  {
    id: "siding-2023",
    title: "Tall siding wall, staining removed",
    serviceSlug: "house-washing",
    before: "PXL_20230417_183750589.webp",
    after: "PXL_20230417_205241632.webp",
    beforeAlt: "Tall house siding with dark mildew staining before cleaning",
    afterAlt: "The same siding wall bright and clean after washing",
  },
  {
    id: "siding-may",
    title: "House side wall, soft wash",
    serviceSlug: "house-washing",
    before: "PXL_20230503_165431074.webp",
    after: "PXL_20230503_172341132.webp",
    beforeAlt: "Tan house siding looking dull and dirty before washing",
    afterAlt: "The same house side wall noticeably brighter after washing",
  },
  {
    id: "siding-wall",
    title: "Long siding wall, oxidation and mildew",
    serviceSlug: "house-washing",
    before: "PXL_20250515_152405802.MP.webp",
    after: "PXL_20250515_152851979.MP.webp",
    beforeAlt: "Long horizontal siding wall with gray mildew streaking before washing",
    afterAlt: "The same siding wall even and bright after washing",
  },
  {
    id: "siding-green",
    title: "Heavy green algae on siding",
    serviceSlug: "soft-washing",
    before: "PXL_20250905_172104374.MP.webp",
    after: "PXL_20250905_173424497.MP.webp",
    beforeAlt: "Vinyl siding with heavy green algae growth below the windows before washing",
    afterAlt: "The same siding free of green algae after a soft wash",
  },
  {
    id: "patio-screened",
    title: "Screened porch patio floor",
    serviceSlug: "screened-porch-cleaning",
    before: "PXL_20230919_150324907.MP.webp",
    after: "PXL_20230919_152614187.webp",
    beforeAlt: "Covered screened patio with stained concrete floor before cleaning",
    afterAlt: "The same screened patio with clean bright concrete after washing",
  },
  {
    id: "porch-landing",
    title: "Entry porch landing",
    serviceSlug: "driveway-concrete-cleaning",
    before: "PXL_20250820_171228452.MP.webp",
    after: "PXL_20250820_184548479.MP.webp",
    beforeAlt: "Small concrete porch landing dark with algae and grime before cleaning",
    afterAlt: "The same porch landing light and clean after pressure washing",
  },
  {
    id: "pool-deck",
    title: "Pool deck refresh",
    serviceSlug: "driveway-concrete-cleaning",
    before: "PXL_20250903_174319106.MP.webp",
    after: "PXL_20250903_183313224.MP.webp",
    beforeAlt: "Poolside concrete deck with dark staining before cleaning",
    afterAlt: "The same pool deck clean and uniform after washing",
  },
  {
    id: "fence-algae",
    title: "Wood fence, green algae removed",
    serviceSlug: "soft-washing",
    before: "PXL_20251002_173026014.MP.webp",
    after: "PXL_20251002_194338808.MP.webp",
    beforeAlt: "Wood privacy fence with green algae discoloration before cleaning",
    afterAlt: "The same fence boards lighter and clean after washing",
  },
  {
    id: "patio-door",
    title: "Patio and slider surround",
    serviceSlug: "house-washing",
    before: "PXL_20260206_163544097.MP.webp",
    after: "PXL_20260206_203112533.MP.webp",
    beforeAlt: "Patio sliding door area with stained siding and concrete before cleaning",
    afterAlt: "The same patio and slider surround clean and bright after washing",
  },
  {
    id: "paver-walkway",
    title: "Paver walkway restoration",
    serviceSlug: "driveway-concrete-cleaning",
    before: "PXL_20260804_142757212.MP.webp",
    after: "PXL_20260804_174803597.MP.webp",
    beforeAlt: "Curving paver walkway dark with algae in the joints before cleaning",
    afterAlt: "The same paver walkway light tan and clean after pressure washing",
  },
  {
    id: "paver-patio",
    title: "Paver patio with outdoor seating",
    serviceSlug: "driveway-concrete-cleaning",
    before: "PXL_20260804_142759269.MP.webp",
    after: "PXL_20260804_174736532.MP.webp",
    beforeAlt: "Paver patio with outdoor furniture mottled dark and dirty before cleaning",
    afterAlt: "The same paver patio bright and clean after washing",
  },
  {
    id: "front-walk",
    title: "Front concrete walkway",
    serviceSlug: "driveway-concrete-cleaning",
    before: "PXL_20260804_142826581.MP.webp",
    after: "PXL_20260804_174843463.MP.webp",
    beforeAlt: "Curved front concrete walkway dull and stained before cleaning",
    afterAlt: "The same front walkway clean and bright after pressure washing",
  },
];

// Full gallery: every supplied project photo, honestly labeled
export const gallery: ResultImage[] = [
  { file: "PXL_20220808_160700576.MP.webp", alt: "Vinyl siding with dark algae streaks before a house wash", service: "House Washing", serviceSlug: "house-washing", width: 2000, height: 1125 },
  { file: "PXL_20220808_165401074.MP.webp", alt: "Clean bright vinyl siding after a house wash", service: "House Washing", serviceSlug: "house-washing", width: 2000, height: 1125 },
  { file: "PXL_20230405_151303714.webp", alt: "Concrete block wall with heavy organic staining before cleaning", service: "Pressure Washing", serviceSlug: "pressure-power-washing", width: 1125, height: 2000 },
  { file: "PXL_20230405_161308185.webp", alt: "Close-up of stained concrete block wall with mildew before cleaning", service: "Pressure Washing", serviceSlug: "pressure-power-washing", width: 2000, height: 1125 },
  { file: "PXL_20230406_190825585.webp", alt: "Covered porch floor with hose laid out before washing", service: "Porch Cleaning", serviceSlug: "screened-porch-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20230406_191025556.MP.webp", alt: "White porch railing freshly cleaned after washing", service: "Porch Cleaning", serviceSlug: "screened-porch-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20230406_192450825.webp", alt: "Wet porch walkway and railings mid-clean", service: "Porch Cleaning", serviceSlug: "screened-porch-cleaning", width: 2000, height: 1125 },
  { file: "PXL_20230406_200151014.webp", alt: "Long covered porch floor clean and glossy after washing", service: "Porch Cleaning", serviceSlug: "screened-porch-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20230411_212037986.MP.webp", alt: "White metal roof being soft washed", service: "Roof Cleaning", serviceSlug: "roof-cleaning", width: 2000, height: 1125 },
  { file: "PXL_20230411_213001675.webp", alt: "Metal roof with grime streaks being treated during a roof cleaning", service: "Roof Cleaning", serviceSlug: "roof-cleaning", width: 2000, height: 1125 },
  { file: "PXL_20230417_183750589.webp", alt: "Tall house siding with dark staining before washing", service: "House Washing", serviceSlug: "house-washing", width: 1125, height: 2000 },
  { file: "PXL_20230417_205241632.webp", alt: "Tall house siding clean after washing", service: "House Washing", serviceSlug: "house-washing", width: 1125, height: 2000 },
  { file: "PXL_20230429_144208168.webp", alt: "Pressure washing rig set up at a large home driveway project", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 2000, height: 1125 },
  { file: "PXL_20230429_215547573.webp", alt: "Circular driveway at a stucco home after cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 2000, height: 1125 },
  { file: "PXL_20230502_161212507.webp", alt: "Concrete walkway mid-wash showing clean strip against dirty concrete", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20230503_165431074.webp", alt: "Tan house siding before a soft wash", service: "House Washing", serviceSlug: "house-washing", width: 1125, height: 2000 },
  { file: "PXL_20230503_172341132.webp", alt: "Tan house siding bright after a soft wash", service: "House Washing", serviceSlug: "house-washing", width: 1125, height: 2000 },
  { file: "PXL_20230503_182853494.MP.webp", alt: "Weathered gray wood fence with mildew before cleaning", service: "Pressure Washing", serviceSlug: "pressure-power-washing", width: 2000, height: 1125 },
  { file: "PXL_20230919_150324907.MP.webp", alt: "Screened patio concrete floor stained before cleaning", service: "Porch Cleaning", serviceSlug: "screened-porch-cleaning", width: 2000, height: 1125 },
  { file: "PXL_20230919_152614187.webp", alt: "Screened patio concrete floor clean after washing", service: "Porch Cleaning", serviceSlug: "screened-porch-cleaning", width: 2000, height: 1125 },
  { file: "PXL_20250515_152405802.MP.webp", alt: "Long siding wall with gray mildew streaks before washing", service: "House Washing", serviceSlug: "house-washing", width: 2000, height: 1125 },
  { file: "PXL_20250515_152851979.MP.webp", alt: "Long siding wall even and bright after washing", service: "House Washing", serviceSlug: "house-washing", width: 2000, height: 1125 },
  { file: "PXL_20250820_171228452.MP.webp", alt: "Concrete entry landing dark with algae before cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20250820_184548479.MP.webp", alt: "Concrete entry landing clean after pressure washing", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20250827_191105211.MP.webp", alt: "Rotary surface cleaner working a side walkway", service: "Pressure Washing", serviceSlug: "pressure-power-washing", width: 1125, height: 2000 },
  { file: "PXL_20250827_192631833.MP.webp", alt: "Side walkway clean and rinsed after surface cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20250827_192635603.MP.webp", alt: "Narrow side walkway beside a house before cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20250829_162846268.MP.webp", alt: "Garage driveway freshly pressure washed", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 2000, height: 1125 },
  { file: "PXL_20250903_174319106.MP.webp", alt: "Pool deck concrete with dark staining before cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20250903_183313224.MP.webp", alt: "Pool deck clean and uniform after washing", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20250905_172104374.MP.webp", alt: "Vinyl siding with heavy green algae before a soft wash", service: "Soft Washing", serviceSlug: "soft-washing", width: 2000, height: 1125 },
  { file: "PXL_20250905_173424497.MP.webp", alt: "Vinyl siding free of algae after a soft wash", service: "Soft Washing", serviceSlug: "soft-washing", width: 2000, height: 1125 },
  { file: "PXL_20251002_173026014.MP.webp", alt: "Wood fence with green algae before cleaning", service: "Soft Washing", serviceSlug: "soft-washing", width: 1125, height: 2000 },
  { file: "PXL_20251002_194338808.MP.webp", alt: "Wood fence boards clean after washing", service: "Soft Washing", serviceSlug: "soft-washing", width: 1125, height: 2000 },
  { file: "PXL_20260206_163544097.MP.webp", alt: "Patio slider area with stained siding before washing", service: "House Washing", serviceSlug: "house-washing", width: 1125, height: 2000 },
  { file: "PXL_20260206_203112533.MP.webp", alt: "Patio slider area clean after washing", service: "House Washing", serviceSlug: "house-washing", width: 1125, height: 2000 },
  { file: "PXL_20260605_151009090.MP.webp", alt: "Garage side wall bright white after a house wash", service: "House Washing", serviceSlug: "house-washing", width: 2000, height: 1125 },
  { file: "PXL_20260723_145055607.MP.webp", alt: "Concrete pad being cleaned with pressure washing equipment on site", service: "Pressure Washing", serviceSlug: "pressure-power-washing", width: 1125, height: 2000 },
  { file: "PXL_20260723_145057972.MP.webp", alt: "Long white deck boards clean after washing", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20260804_142757212.MP.webp", alt: "Curving paver walkway dark with algae before cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20260804_142759269.MP.webp", alt: "Paver patio with outdoor furniture dirty before cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20260804_142806560.MP.webp", alt: "Front entry with dark stained stone before cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 2000, height: 1125 },
  { file: "PXL_20260804_142826581.MP.webp", alt: "Curved front walkway dull and stained before cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20260804_142830744.MP.webp", alt: "Front walkway mid-clean with rinse water running off", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20260804_150917547.MP.webp", alt: "Surface cleaner working a paver patio", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20260804_174736532.MP.webp", alt: "Paver patio bright and clean after washing", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20260804_174749171.MP.webp", alt: "Clean paver patio with outdoor seating after washing", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20260804_174803597.MP.webp", alt: "Curving paver walkway light tan and clean after washing", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20260804_174825033.MP.webp", alt: "Front entry concrete landing clean after washing", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "PXL_20260804_174843463.MP.webp", alt: "Curved front walkway clean after pressure washing", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
];
