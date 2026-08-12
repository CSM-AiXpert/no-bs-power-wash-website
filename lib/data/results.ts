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
    before: "vinyl-siding-with-dark-algae-streaks-before-a-house-wash.webp",
    after: "clean-bright-vinyl-siding-after-a-house-wash.webp",
    beforeAlt: "Beige vinyl siding covered in dark algae and mildew streaks before washing",
    afterAlt: "The same beige vinyl siding bright and clean after a soft wash",
  },
  {
    id: "siding-2023",
    title: "Tall siding wall, staining removed",
    serviceSlug: "house-washing",
    before: "tall-house-siding-with-dark-staining-before-washing.webp",
    after: "tall-house-siding-clean-after-washing.webp",
    beforeAlt: "Tall house siding with dark mildew staining before cleaning",
    afterAlt: "The same siding wall bright and clean after washing",
  },
  {
    id: "siding-may",
    title: "House side wall, soft wash",
    serviceSlug: "house-washing",
    before: "tan-house-siding-before-a-soft-wash.webp",
    after: "tan-house-siding-bright-after-a-soft-wash.webp",
    beforeAlt: "Tan house siding looking dull and dirty before washing",
    afterAlt: "The same house side wall noticeably brighter after washing",
  },
  {
    id: "siding-wall",
    title: "Long siding wall, oxidation and mildew",
    serviceSlug: "house-washing",
    before: "long-siding-wall-with-gray-mildew-streaks-before-washing.webp",
    after: "long-siding-wall-even-and-bright-after-washing.webp",
    beforeAlt: "Long horizontal siding wall with gray mildew streaking before washing",
    afterAlt: "The same siding wall even and bright after washing",
  },
  {
    id: "siding-green",
    title: "Heavy green algae on siding",
    serviceSlug: "soft-washing",
    before: "vinyl-siding-with-heavy-green-algae-before-a-soft-wash.webp",
    after: "vinyl-siding-free-of-algae-after-a-soft-wash.webp",
    beforeAlt: "Vinyl siding with heavy green algae growth below the windows before washing",
    afterAlt: "The same siding free of green algae after a soft wash",
  },
  {
    id: "patio-screened",
    title: "Screened porch patio floor",
    serviceSlug: "screened-porch-cleaning",
    before: "screened-patio-concrete-floor-stained-before-cleaning.webp",
    after: "screened-patio-concrete-floor-clean-after-washing.webp",
    beforeAlt: "Covered screened patio with stained concrete floor before cleaning",
    afterAlt: "The same screened patio with clean bright concrete after washing",
  },
  {
    id: "porch-landing",
    title: "Entry porch landing",
    serviceSlug: "driveway-concrete-cleaning",
    before: "concrete-entry-landing-dark-with-algae-before-cleaning.webp",
    after: "concrete-entry-landing-clean-after-pressure-washing.webp",
    beforeAlt: "Small concrete porch landing dark with algae and grime before cleaning",
    afterAlt: "The same porch landing light and clean after pressure washing",
  },
  {
    id: "pool-deck",
    title: "Pool deck refresh",
    serviceSlug: "driveway-concrete-cleaning",
    before: "pool-deck-concrete-with-dark-staining-before-cleaning.webp",
    after: "pool-deck-clean-and-uniform-after-washing.webp",
    beforeAlt: "Poolside concrete deck with dark staining before cleaning",
    afterAlt: "The same pool deck clean and uniform after washing",
  },
  {
    id: "fence-algae",
    title: "Wood fence, green algae removed",
    serviceSlug: "soft-washing",
    before: "wood-fence-with-green-algae-before-cleaning.webp",
    after: "wood-fence-boards-clean-after-washing.webp",
    beforeAlt: "Wood privacy fence with green algae discoloration before cleaning",
    afterAlt: "The same fence boards lighter and clean after washing",
  },
  {
    id: "patio-door",
    title: "Patio and slider surround",
    serviceSlug: "house-washing",
    before: "patio-slider-area-with-stained-siding-before-washing.webp",
    after: "patio-slider-area-clean-after-washing.webp",
    beforeAlt: "Patio sliding door area with stained siding and concrete before cleaning",
    afterAlt: "The same patio and slider surround clean and bright after washing",
  },
  {
    id: "paver-walkway",
    title: "Paver walkway restoration",
    serviceSlug: "driveway-concrete-cleaning",
    before: "curving-paver-walkway-dark-with-algae-before-cleaning.webp",
    after: "curving-paver-walkway-light-tan-and-clean-after-washing.webp",
    beforeAlt: "Curving paver walkway dark with algae in the joints before cleaning",
    afterAlt: "The same paver walkway light tan and clean after pressure washing",
  },
  {
    id: "paver-patio",
    title: "Paver patio with outdoor seating",
    serviceSlug: "driveway-concrete-cleaning",
    before: "paver-patio-with-outdoor-furniture-dirty-before-cleaning.webp",
    after: "paver-patio-bright-and-clean-after-washing.webp",
    beforeAlt: "Paver patio with outdoor furniture mottled dark and dirty before cleaning",
    afterAlt: "The same paver patio bright and clean after washing",
  },
  {
    id: "front-walk",
    title: "Front concrete walkway",
    serviceSlug: "driveway-concrete-cleaning",
    before: "curved-front-walkway-dull-and-stained-before-cleaning.webp",
    after: "curved-front-walkway-clean-after-pressure-washing.webp",
    beforeAlt: "Curved front concrete walkway dull and stained before cleaning",
    afterAlt: "The same front walkway clean and bright after pressure washing",
  },
];

// Full gallery: every supplied project photo, honestly labeled
export const gallery: ResultImage[] = [
  { file: "vinyl-siding-with-dark-algae-streaks-before-a-house-wash.webp", alt: "Vinyl siding with dark algae streaks before a house wash", service: "House Washing", serviceSlug: "house-washing", width: 2000, height: 1125 },
  { file: "clean-bright-vinyl-siding-after-a-house-wash.webp", alt: "Clean bright vinyl siding after a house wash", service: "House Washing", serviceSlug: "house-washing", width: 2000, height: 1125 },
  { file: "concrete-block-wall-with-heavy-organic-staining-before-cleaning.webp", alt: "Concrete block wall with heavy organic staining before cleaning", service: "Pressure Washing", serviceSlug: "pressure-power-washing", width: 1125, height: 2000 },
  { file: "close-up-of-stained-concrete-block-wall-with-mildew-before-cleaning.webp", alt: "Close-up of stained concrete block wall with mildew before cleaning", service: "Pressure Washing", serviceSlug: "pressure-power-washing", width: 2000, height: 1125 },
  { file: "covered-porch-floor-with-hose-laid-out-before-washing.webp", alt: "Covered porch floor with hose laid out before washing", service: "Porch Cleaning", serviceSlug: "screened-porch-cleaning", width: 1125, height: 2000 },
  { file: "white-porch-railing-freshly-cleaned-after-washing.webp", alt: "White porch railing freshly cleaned after washing", service: "Porch Cleaning", serviceSlug: "screened-porch-cleaning", width: 1125, height: 2000 },
  { file: "wet-porch-walkway-and-railings-mid-clean.webp", alt: "Wet porch walkway and railings mid-clean", service: "Porch Cleaning", serviceSlug: "screened-porch-cleaning", width: 2000, height: 1125 },
  { file: "long-covered-porch-floor-clean-and-glossy-after-washing.webp", alt: "Long covered porch floor clean and glossy after washing", service: "Porch Cleaning", serviceSlug: "screened-porch-cleaning", width: 1125, height: 2000 },
  { file: "white-metal-roof-being-soft-washed.webp", alt: "White metal roof being soft washed", service: "Roof Cleaning", serviceSlug: "roof-cleaning", width: 2000, height: 1125 },
  { file: "metal-roof-with-grime-streaks-being-treated-during-a-roof-cleaning.webp", alt: "Metal roof with grime streaks being treated during a roof cleaning", service: "Roof Cleaning", serviceSlug: "roof-cleaning", width: 2000, height: 1125 },
  { file: "tall-house-siding-with-dark-staining-before-washing.webp", alt: "Tall house siding with dark staining before washing", service: "House Washing", serviceSlug: "house-washing", width: 1125, height: 2000 },
  { file: "tall-house-siding-clean-after-washing.webp", alt: "Tall house siding clean after washing", service: "House Washing", serviceSlug: "house-washing", width: 1125, height: 2000 },
  { file: "pressure-washing-rig-set-up-at-a-large-home-driveway-project.webp", alt: "Pressure washing rig set up at a large home driveway project", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 2000, height: 1125 },
  { file: "circular-driveway-at-a-stucco-home-after-cleaning.webp", alt: "Circular driveway at a stucco home after cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 2000, height: 1125 },
  { file: "concrete-walkway-mid-wash-showing-clean-strip-against-dirty-concrete.webp", alt: "Concrete walkway mid-wash showing clean strip against dirty concrete", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "tan-house-siding-before-a-soft-wash.webp", alt: "Tan house siding before a soft wash", service: "House Washing", serviceSlug: "house-washing", width: 1125, height: 2000 },
  { file: "tan-house-siding-bright-after-a-soft-wash.webp", alt: "Tan house siding bright after a soft wash", service: "House Washing", serviceSlug: "house-washing", width: 1125, height: 2000 },
  { file: "weathered-gray-wood-fence-with-mildew-before-cleaning.webp", alt: "Weathered gray wood fence with mildew before cleaning", service: "Pressure Washing", serviceSlug: "pressure-power-washing", width: 2000, height: 1125 },
  { file: "screened-patio-concrete-floor-stained-before-cleaning.webp", alt: "Screened patio concrete floor stained before cleaning", service: "Porch Cleaning", serviceSlug: "screened-porch-cleaning", width: 2000, height: 1125 },
  { file: "screened-patio-concrete-floor-clean-after-washing.webp", alt: "Screened patio concrete floor clean after washing", service: "Porch Cleaning", serviceSlug: "screened-porch-cleaning", width: 2000, height: 1125 },
  { file: "long-siding-wall-with-gray-mildew-streaks-before-washing.webp", alt: "Long siding wall with gray mildew streaks before washing", service: "House Washing", serviceSlug: "house-washing", width: 2000, height: 1125 },
  { file: "long-siding-wall-even-and-bright-after-washing.webp", alt: "Long siding wall even and bright after washing", service: "House Washing", serviceSlug: "house-washing", width: 2000, height: 1125 },
  { file: "concrete-entry-landing-dark-with-algae-before-cleaning.webp", alt: "Concrete entry landing dark with algae before cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "concrete-entry-landing-clean-after-pressure-washing.webp", alt: "Concrete entry landing clean after pressure washing", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "rotary-surface-cleaner-working-a-side-walkway.webp", alt: "Rotary surface cleaner working a side walkway", service: "Pressure Washing", serviceSlug: "pressure-power-washing", width: 1125, height: 2000 },
  { file: "side-walkway-clean-and-rinsed-after-surface-cleaning.webp", alt: "Side walkway clean and rinsed after surface cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "narrow-side-walkway-beside-a-house-before-cleaning.webp", alt: "Narrow side walkway beside a house before cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "garage-driveway-freshly-pressure-washed.webp", alt: "Garage driveway freshly pressure washed", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 2000, height: 1125 },
  { file: "pool-deck-concrete-with-dark-staining-before-cleaning.webp", alt: "Pool deck concrete with dark staining before cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "pool-deck-clean-and-uniform-after-washing.webp", alt: "Pool deck clean and uniform after washing", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "vinyl-siding-with-heavy-green-algae-before-a-soft-wash.webp", alt: "Vinyl siding with heavy green algae before a soft wash", service: "Soft Washing", serviceSlug: "soft-washing", width: 2000, height: 1125 },
  { file: "vinyl-siding-free-of-algae-after-a-soft-wash.webp", alt: "Vinyl siding free of algae after a soft wash", service: "Soft Washing", serviceSlug: "soft-washing", width: 2000, height: 1125 },
  { file: "wood-fence-with-green-algae-before-cleaning.webp", alt: "Wood fence with green algae before cleaning", service: "Soft Washing", serviceSlug: "soft-washing", width: 1125, height: 2000 },
  { file: "wood-fence-boards-clean-after-washing.webp", alt: "Wood fence boards clean after washing", service: "Soft Washing", serviceSlug: "soft-washing", width: 1125, height: 2000 },
  { file: "patio-slider-area-with-stained-siding-before-washing.webp", alt: "Patio slider area with stained siding before washing", service: "House Washing", serviceSlug: "house-washing", width: 1125, height: 2000 },
  { file: "patio-slider-area-clean-after-washing.webp", alt: "Patio slider area clean after washing", service: "House Washing", serviceSlug: "house-washing", width: 1125, height: 2000 },
  { file: "garage-side-wall-bright-white-after-a-house-wash.webp", alt: "Garage side wall bright white after a house wash", service: "House Washing", serviceSlug: "house-washing", width: 2000, height: 1125 },
  { file: "concrete-pad-being-cleaned-with-pressure-washing-equipment-on-site.webp", alt: "Concrete pad being cleaned with pressure washing equipment on site", service: "Pressure Washing", serviceSlug: "pressure-power-washing", width: 1125, height: 2000 },
  { file: "long-white-deck-boards-clean-after-washing.webp", alt: "Long white deck boards clean after washing", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "curving-paver-walkway-dark-with-algae-before-cleaning.webp", alt: "Curving paver walkway dark with algae before cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "paver-patio-with-outdoor-furniture-dirty-before-cleaning.webp", alt: "Paver patio with outdoor furniture dirty before cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "front-entry-with-dark-stained-stone-before-cleaning.webp", alt: "Front entry with dark stained stone before cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 2000, height: 1125 },
  { file: "curved-front-walkway-dull-and-stained-before-cleaning.webp", alt: "Curved front walkway dull and stained before cleaning", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "front-walkway-mid-clean-with-rinse-water-running-off.webp", alt: "Front walkway mid-clean with rinse water running off", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "surface-cleaner-working-a-paver-patio.webp", alt: "Surface cleaner working a paver patio", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "paver-patio-bright-and-clean-after-washing.webp", alt: "Paver patio bright and clean after washing", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "clean-paver-patio-with-outdoor-seating-after-washing.webp", alt: "Clean paver patio with outdoor seating after washing", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "curving-paver-walkway-light-tan-and-clean-after-washing.webp", alt: "Curving paver walkway light tan and clean after washing", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "front-entry-concrete-landing-clean-after-washing.webp", alt: "Front entry concrete landing clean after washing", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
  { file: "curved-front-walkway-clean-after-pressure-washing.webp", alt: "Curved front walkway clean after pressure washing", service: "Concrete Cleaning", serviceSlug: "driveway-concrete-cleaning", width: 1125, height: 2000 },
];
