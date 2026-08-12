export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  service: string;
  serviceSlug: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  readTime: string;
  body: BlogBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "lowcountry-exterior-cleaning-calendar",
    title: "The Lowcountry Exterior Cleaning Calendar: What to Wash and When",
    excerpt:
      "Bluffton and Hilton Head weather is rough on houses. Here is a simple month-by-month plan for keeping your siding, roof, driveway, and porch clean all year.",
    date: "2026-08-12",
    dateLabel: "August 12, 2026",
    service: "Soft Washing",
    serviceSlug: "soft-washing",
    image: "paver-patio-bright-and-clean-after-washing.webp",
    imageAlt: "A freshly soft washed Lowcountry home exterior in Bluffton SC",
    metaTitle: "Lowcountry Exterior Cleaning Calendar | No BS Power Wash",
    metaDescription:
      "What to wash and when in Bluffton, Hilton Head, and Beaufort. A simple seasonal schedule for house washing, roof cleaning, driveways, and porches.",
    readTime: "7 min read",
    body: [
      {
        type: "p",
        text: "Short version: in the Lowcountry you should wash your house once a year, treat your roof every couple of years, and hit the driveway and porch once or twice a year, timed around pollen season and hurricane season. Here is the full calendar so you can stop guessing.",
      },
      {
        type: "p",
        text: "Our climate is the problem. Humidity sits high most of the year, we get long stretches of warm rain, and anything in the shade stays damp for days. That is a buffet for algae, mold, and mildew. Add the pollen dump every spring and the salt air near the coast, and a house in Bluffton or Hilton Head gets dirty faster than almost anywhere else in the country. The trick is not to wait until it looks bad. By the time you can see green from the street, the growth has been there for months.",
      },
      { type: "h2", text: "January and February: The Quiet Window" },
      {
        type: "p",
        text: "These are the coolest, driest months we get. Pollen has not started, humidity dips, and cleaning solutions work predictably because surfaces are not baking in the sun. This is a great time for house washing and for getting ahead of the spring rush. If your siding went all of last year without a wash, do not wait for April. Do it now and the house goes into pollen season clean, which makes the yellow film easier to rinse off later.",
      },
      { type: "h2", text: "March and April: Pollen Season Damage Control" },
      {
        type: "p",
        text: "Every year the pine and oak pollen arrives and coats everything in a fine yellow-green dust. It is not just ugly. Pollen is organic food for mold and algae, so a pollen-coated house that stays damp is a house that turns green by June. A rinse or soft wash in late March or April, after the worst of the drop, knocks the pollen off before it becomes fertilizer. This is also the right time for screened porch cleaning, because the screens trap pollen and hold it against the frames where mildew follows.",
      },
      {
        type: "ul",
        items: [
          "Rinse or soft wash siding after the heavy pollen drop, usually late March into April",
          "Clean screened porches and screen enclosures before mildew takes hold in the frames",
          "Check the north and east sides of the house for early green algae growth",
          "Clear gutters and downspouts so spring rains do not streak the walls",
        ],
      },
      { type: "h2", text: "May through August: Prime Washing Season" },
      {
        type: "p",
        text: "Late spring and summer is when most of our house washing and soft washing happens, and for good reason. Growth is at its peak, so a proper soft wash now kills algae and mildew at the root right when they are spreading fastest. Summer is also when driveways and patios get the most use, so a driveway and concrete cleaning makes the whole property look sharp for the months you are actually outside. One caution: do not pressure wash siding in peak heat. Hot surfaces flash-dry detergent before it can work, and high pressure on hot vinyl can leave marks. Soft wash instead.",
      },
      { type: "h2", text: "September and October: The Hurricane Season Reset" },
      {
        type: "p",
        text: "After a humid summer, plus whatever storms pushed through, most Lowcountry homes are carrying a film of mildew, salt, and windblown grime. Early fall is the second-best window of the year for a full exterior wash. If you live near the water on Hilton Head or along the May River, the salt air never really stops, and a fall wash removes the residue before it sits on paint and metal all winter. This is also a smart time to look at the roof. If you see black streaks forming, that is gloeocapsa magma, a living algae, and fall is an ideal time for a roof cleaning before winter moisture feeds it.",
      },
      { type: "h2", text: "November and December: Roofs and Concrete" },
      {
        type: "p",
        text: "Cooler, drier air makes late fall perfect for roof cleaning and driveway work. Roof treatments dwell better without summer heat cooking them off, and concrete cleaning is faster when surfaces are not at 95 degrees. If you only do one big exterior project in the back half of the year, make it the roof. Black streaks do not go away on their own, they spread.",
      },
      { type: "h2", text: "The One-Page Version" },
      {
        type: "ul",
        items: [
          "House washing: once a year, ideally February through May",
          "Roof cleaning: every two to three years, fall and winter are ideal",
          "Driveway and concrete cleaning: once a year, twice if you have heavy shade or tree cover",
          "Screened porch cleaning: every spring after pollen, plus a fall rinse if you are near the water",
          "Decks, fences, and patios: fold them into whichever visit is closest",
        ],
      },
      {
        type: "p",
        text: "Follow that schedule and your home never gets to the embarrassing stage. It is cheaper to maintain clean than to rescue filthy, and it is a lot easier on your siding, shingles, and concrete.",
      },
      {
        type: "p",
        text: "Want us to look at your place and tell you exactly what it needs and when? No Games. Just Clean. Call or text Bob at 843-321-9345 for a free quote, and we will build a simple schedule around your home.",
      },
    ],
  },
  {
    slug: "diy-pressure-washing-mistakes",
    title: "7 DIY Pressure Washing Mistakes That Cost Lowcountry Homeowners Money",
    excerpt:
      "Renting a pressure washer looks cheap until you etch the driveway or blow water behind your siding. Here are the seven mistakes we see most, and how to avoid them.",
    date: "2026-08-05",
    dateLabel: "August 5, 2026",
    service: "Pressure & Power Washing",
    serviceSlug: "pressure-power-washing",
    image: "covered-porch-floor-with-hose-laid-out-before-washing.webp",
    imageAlt: "Driveway pressure washing in progress on a Lowcountry home",
    metaTitle: "7 DIY Pressure Washing Mistakes | No BS Power Wash",
    metaDescription:
      "Thinking about renting a pressure washer? These 7 DIY mistakes damage siding, roofs, and concrete across Bluffton and Hilton Head. Read this first.",
    readTime: "7 min read",
    body: [
      {
        type: "p",
        text: "The honest answer: most DIY pressure washing goes wrong in one of seven predictable ways, and several of them cost more to fix than a professional wash would have cost in the first place. If you are going to do it yourself, avoid these. If you would rather not risk it, that is what we are here for.",
      },
      {
        type: "p",
        text: "A rental machine from the hardware store is a real tool, not a toy. Consumer units run 2,000 to 3,000 PSI, which is enough to carve lines in concrete, shred window screens, strip paint, and force water places water should never go. The machine is rarely the problem. The operator is.",
      },
      { type: "h2", text: "Mistake 1: Using High Pressure on Siding" },
      {
        type: "p",
        text: "Vinyl, Hardie board, and stucco are not meant to be blasted. High pressure cracks vinyl, chips paint, and on stucco it can knock the finish coat right off. Worse, it does not actually kill the algae and mildew growing on your walls. It shears off the visible top layer and leaves the roots behind, so the green comes back in weeks. The right method for siding is soft washing: low pressure with a cleaning solution that kills growth at the root.",
      },
      { type: "h2", text: "Mistake 2: Spraying Upward Under the Laps" },
      {
        type: "p",
        text: "Siding is designed to shed water running down, not water fired up. Aim a wand upward and you push water behind the siding, into the wall cavity, and around window frames. In our humidity, that trapped moisture can sit for weeks and turn into mold you cannot see. Always spray level or slightly downward, and keep distance from seams, vents, and weep holes.",
      },
      { type: "h2", text: "Mistake 3: Pressure Washing the Roof" },
      {
        type: "p",
        text: "This is the expensive one. High pressure strips the protective granules off asphalt shingles, and every granule you remove shortens the life of the roof. Some homeowners also void their shingle warranty this way without knowing it. Those black streaks on Lowcountry roofs are gloeocapsa magma, an algae, and the correct fix is a low-pressure roof cleaning treatment that kills it, not a blast that scatters it.",
      },
      { type: "h2", text: "Mistake 4: Etching the Concrete" },
      {
        type: "p",
        text: "Concrete is tough, but it is not invincible. Hold a tight nozzle too close or dwell too long in one spot and you carve permanent lines and swirl marks into the surface. We see etched driveways all over Bluffton and Hilton Head where someone got halfway across the slab before realizing the wand was leaving stripes. The marks do not fade. Even, overlapping passes with the right tip and distance, or better a surface cleaner, is how concrete gets cleaned without scars.",
      },
      { type: "h2", text: "Mistake 5: Skipping the Detergent" },
      {
        type: "p",
        text: "Water alone moves dirt around. It does not kill anything. In a climate where green algae regrows fast, a water-only wash is a temporary rinse at best. A proper cleaning solution does the actual work: it breaks down organic growth so it can be rinsed away at low pressure, and it keeps surfaces clean longer because the roots are dead. Pressure is the delivery system, not the cleaning agent.",
      },
      { type: "h2", text: "Mistake 6: Ignoring Plants, Electrical, and Neighbors" },
      {
        type: "ul",
        items: [
          "Wet down landscaping before and after so cleaning solution does not burn plants",
          "Cover or avoid outdoor outlets, light fixtures, and electrical meters",
          "Watch where the runoff goes, especially toward a neighbor's fresh mulch or clean driveway",
          "Never spray people, pets, or yourself; a pressure washer can cut skin at close range",
        ],
      },
      { type: "h2", text: "Mistake 7: Doing It Once and Calling It Done" },
      {
        type: "p",
        text: "Even a decent DIY wash fades fast here if the growth was not killed. That is why so many Lowcountry driveways look clean for a month and green again by the next. The fix is not more pressure. It is the right chemistry, the right method for each surface, and a realistic schedule. Siding and porches want soft washing. Concrete and pavers can take pressure. Roofs should never see pressure at all.",
      },
      {
        type: "p",
        text: "One last consideration: time. A full driveway, house, and patio done right is most of a weekend with rental pickup, setup, the work itself, and the return trip. Multiply the value of your Saturday accordingly before you decide the DIY route is the savings play.",
      },
      {
        type: "p",
        text: "If that sounds like more nuance than you wanted from a weekend project, fair enough. Call or text Bob at 843-321-9345 for a free quote. We will tell you honestly what your place needs, whether that is pressure washing, soft washing, or both.",
      },
    ],
  },
  {
    slug: "screened-porch-pollen-mildew-cleaning",
    title: "Screened Porch Cleaning in the Lowcountry: Pollen, Mildew, and the Right Way to Rinse",
    excerpt:
      "Screened porches are the best room in a Lowcountry house and the hardest to keep clean. Here is how to handle pollen, mildew, and salt film without shredding your screens.",
    date: "2026-07-29",
    dateLabel: "July 29, 2026",
    service: "Screened Porch Cleaning",
    serviceSlug: "screened-porch-cleaning",
    image: "tall-house-siding-with-dark-staining-before-washing.webp",
    imageAlt: "Clean screened porch on a Lowcountry home after professional cleaning",
    metaTitle: "Screened Porch Cleaning in the Lowcountry | No BS Power Wash",
    metaDescription:
      "Pollen in spring, mildew all summer, salt film near the coast. How to clean a screened porch in Bluffton or Hilton Head without damaging screens or frames.",
    readTime: "6 min read",
    body: [
      {
        type: "p",
        text: "The short answer: a Lowcountry screened porch needs a gentle wash at least twice a year, once after spring pollen and once in the fall, using low pressure and a mild cleaning solution. Anything more aggressive risks torn screens, chalky frames, and water damage to whatever is inside.",
      },
      {
        type: "p",
        text: "The screened porch is the whole point of living here. It is also a magnet for everything the Lowcountry air carries. The screens catch pollen in spring, trap humid air against the frames all summer, and collect a sticky salt film if you are anywhere near the water on Hilton Head or the Beaufort riverfront. Left alone for a season or two, frames go chalky, mildew dots the screens, and the floor turns slick with algae in the corners.",
      },
      { type: "h2", text: "What Is Actually Living on Your Porch" },
      {
        type: "p",
        text: "Three things, usually at once. First, pollen: that yellow-green film every March and April is not just dust, it is organic material that feeds mold. Second, mildew and algae: anywhere the screens shade the frames, moisture lingers and mildew follows, showing up as gray or black speckling. Third, salt and grime: coastal air deposits a film that makes everything feel slightly sticky and holds dirt against surfaces. Each one needs a slightly different handling, which is why the method matters more than the muscle.",
      },
      { type: "h2", text: "Why You Should Not Blast a Screened Porch" },
      {
        type: "p",
        text: "Screens are the most delicate surface on your entire house. A pressure washer at close range will stretch, tear, or pop screen spline right out of the frame. The aluminum frames are softer than they look too, and high pressure can strip their finish and leave permanent wand marks. Then there is everything inside: porch furniture, ceiling fans, outdoor TVs, and the threshold into your house. Spraying hard at a screen is spraying water straight into your living space. This is a low-pressure job, full stop.",
      },
      { type: "h2", text: "The Right Way to Clean It" },
      {
        type: "ul",
        items: [
          "Remove or cover furniture, rugs, and electronics before anything gets wet",
          "Rinse gently from the inside out so debris flows away from the house",
          "Apply a mild cleaning solution to frames and screens and let it dwell so it kills mildew instead of smearing it",
          "Rinse at low pressure, top to bottom, keeping the nozzle back from the screens",
          "Finish with the floor, working toward the door or drain so dirty water never crosses clean concrete",
        ],
      },
      {
        type: "p",
        text: "That dwell step is the one everyone skips, and it is the one that matters most. Mildew you can see is the tip of the growth. A proper cleaning solution soaks in and kills it at the root so your porch stays clean for months instead of weeks.",
      },
      { type: "h2", text: "Timing It Around the Lowcountry Seasons" },
      {
        type: "p",
        text: "Clean too early in March and the pollen drop re-coats everything you just washed. Wait until late April, after the worst of it, and one good wash carries you through summer. The fall wash, around September or October, clears off a summer's worth of mildew and salt before the holidays when the porch actually gets used again. If your porch sits under oaks or pines, or you are on the water, you may want a light rinse mid-summer too. Shade plus humidity equals fast regrowth.",
      },
      { type: "h2", text: "While You Are at It" },
      {
        type: "p",
        text: "A porch cleaning pairs naturally with house washing, since the same algae that speckles your frames is usually working on the siding behind them. If the porch floor is concrete or pavers, a driveway and concrete cleaning pass finishes the job and gets rid of the slick algae film that makes wet corners dangerous. Bundling it into one visit is the efficient way to do it.",
      },
      {
        type: "p",
        text: "Between professional cleanings, a soft broom and a garden hose go a long way. Sweep pollen and leaf debris off weekly during spring, and hose the floor down after storms so grit does not grind into the finish underfoot. Skip bleach-heavy DIY mixes on aluminum frames, because they can streak and oxidize the finish, and never mix cleaning chemicals. When in doubt, plain water and patience beat an aggressive experiment on the room you sit in every evening.",
      },
      {
        type: "p",
        text: "Your porch should be the cleanest room of the house, not the swampiest. Call or text Bob at 843-321-9345 for a free quote on screened porch cleaning, and we will have it ready for your next evening outside.",
      },
    ],
  },
  {
    slug: "exterior-cleaning-before-listing-your-home",
    title: "Selling Your Home? Why Exterior Cleaning Comes Before the Photographer",
    excerpt:
      "Buyers judge a house in the first eight seconds, and that judgment happens at the curb. Here is why a wash before listing photos is the highest-return prep you can do.",
    date: "2026-07-22",
    dateLabel: "July 22, 2026",
    service: "House Washing",
    serviceSlug: "house-washing",
    image: "long-siding-wall-with-gray-mildew-streaks-before-washing.webp",
    imageAlt: "Freshly washed Lowcountry home exterior ready for listing photos",
    metaTitle: "Exterior Cleaning Before Selling Your Home | Bluffton SC",
    metaDescription:
      "Listing your Bluffton or Hilton Head home? Wash the exterior before the photographer arrives. Clean siding, roof, and driveway change buyer perception fast.",
    readTime: "6 min read",
    body: [
      {
        type: "p",
        text: "Here is the direct answer: wash the house, roof, driveway, and walkways before the listing photographer shows up, not after, and not as an afterthought. Buyers decide how they feel about a home before they reach the front door, and every photo in the listing starts with the exterior. Cleaning is one of the cheapest pre-listing improvements with one of the most visible payoffs.",
      },
      {
        type: "p",
        text: "Realtors around Bluffton, Hilton Head, and Beaufort will tell you the same thing: the first photo is the money shot, and it is always the front of the house. If the siding has green algae creeping up the north wall, the roof has black streaks, and the driveway is gray with mildew, the house photographs as neglected, even if the inside is immaculate. Buyers may not know why the home feels tired. They just scroll past.",
      },
      { type: "h2", text: "What Buyers Actually See at the Curb" },
      {
        type: "p",
        text: "A dirty exterior sends a specific message, and it is not about dirt. Buyers read visible algae and stained concrete as deferred maintenance, and deferred maintenance makes them wonder what else has been ignored. If the outside has not been cared for, they assume the HVAC, the roof, and the plumbing have not been either. Fair or not, that suspicion shows up in lower offers and longer days on market. A clean exterior does the opposite: it signals a home that has been looked after.",
      },
      { type: "h2", text: "The Surfaces That Matter Most Before Listing" },
      {
        type: "ul",
        items: [
          "Siding: a soft wash removes algae, mildew, and pollen film so the paint color photographs true",
          "Roof: black gloeocapsa magma streaks are one of the first things buyers and inspectors notice from the street",
          "Driveway and walkways: concrete is a huge visual area and dark mildew makes the whole front approach look dingy",
          "Front entry and porch: the spot every buyer stands in while the agent opens the lockbox",
          "Screened porch or patio: outdoor living space sells Lowcountry homes, but only if it looks usable",
        ],
      },
      { type: "h2", text: "Why It Has to Happen Before the Photos" },
      {
        type: "p",
        text: "Almost every buyer's first showing happens on a phone screen. The photos are the showing. If the listing launches with a grimy exterior, you can wash the house the next week and it will not matter, because the photos buyers saved and compared were taken on day one. Schedule the cleaning a week or two before the photographer so everything is dry, plants are settled, and any touch-ups are done. Your agent will thank you, and so will your final price.",
      },
      { type: "h2", text: "Appraisers and Inspectors Notice Too" },
      {
        type: "p",
        text: "It is not just buyers. A roof covered in black streaks gets flagged by home inspectors as possibly aged or failing, even when the shingles have years of life left. That single line in an inspection report can trigger renegotiation or demands for a roof credit. A proper roof cleaning removes the streaks and the question along with them. Same story with a mildew-slick walkway: one slip concern in an inspector's notes is a headache you do not need in escrow.",
      },
      { type: "h2", text: "The Lowcountry Makes This Non-Negotiable" },
      {
        type: "p",
        text: "In a dry climate you might get away with listing a house that has not been washed in a couple of years. Here, a single humid summer coats the shaded sides of a home in green. Pollen season dusts everything yellow. Salt air near the coast films over windows and railings. Our environment makes exteriors age visibly fast, which means the gap between a washed and unwashed home in listing photos is bigger here than almost anywhere else.",
      },
      {
        type: "p",
        text: "Compared to the other items on a typical pre-listing checklist, exterior cleaning is also one of the fastest. Painting a front door takes a day. Landscaping refreshes take a weekend and a truck bed of mulch. A full exterior wash, siding, roof, driveway, and walkways, is usually a single visit, and the transformation is visible the moment we rinse. If your agent gives you a prep list, put this one at the top and get it scheduled early, because the weeks before a listing go faster than anyone expects.",
      },
      {
        type: "p",
        text: "Getting ready to list, or an agent with a property coming to market? Call or text Bob at 843-321-9345 for a free quote. We work with sellers and realtors across Bluffton, Hilton Head, and Beaufort to get homes photo-ready on the timeline your listing date demands.",
      },
    ],
  },
  {
    slug: "hoa-letter-exterior-cleaning",
    title: "Got an HOA Letter About Your Home's Exterior? Here's What to Do",
    excerpt:
      "HOA violation letters about dirty siding, stained roofs, or mildew driveways are common in Bluffton and Hilton Head communities. Here is how to handle one quickly and painlessly.",
    date: "2026-07-15",
    dateLabel: "July 15, 2026",
    service: "House Washing",
    serviceSlug: "house-washing",
    image: "curving-paver-walkway-dark-with-algae-before-cleaning.webp",
    imageAlt: "Clean home exterior in a Bluffton HOA community after soft washing",
    metaTitle: "Got an HOA Letter About Your Exterior? | No BS Power Wash",
    metaDescription:
      "HOA notice about dirty siding, roof stains, or a mildew driveway? What Bluffton and Hilton Head homeowners should do first, and how fast it can be fixed.",
    readTime: "6 min read",
    body: [
      {
        type: "p",
        text: "The short version: do not ignore the letter, do not panic, and do not rent a pressure washer in a frenzy. Read the deadline, get a professional quote, and schedule the cleaning well before the compliance date. Most HOA exterior violations are a one-visit fix.",
      },
      {
        type: "p",
        text: "If you live in a planned community around Bluffton, Hilton Head, or Beaufort, and there are a lot of them, an exterior maintenance letter is almost a rite of passage. Green algae on the siding, black streaks on the roof, a driveway gone gray with mildew: these are the three most common violations we get called about. The Lowcountry climate makes every home drift toward dirty, and HOA standards do not drift with it.",
      },
      { type: "h2", text: "First: Read the Letter Carefully" },
      {
        type: "p",
        text: "Not all notices are the same. Some are friendly reminders with no hard deadline. Others are formal violations with a compliance date and a fine schedule if you miss it. Note three things: exactly what they are citing (siding, roof, driveway, fence, or all of the above), the deadline, and whether they require documentation of the fix. If anything is unclear, call the management company. They answer these questions every day and it costs you nothing to confirm.",
      },
      { type: "h2", text: "Do Not DIY in a Hurry" },
      {
        type: "p",
        text: "The natural reaction to a violation letter is to rent a machine that weekend and blast the problem away. That is how siding gets cracked, shingles lose granules, and driveways get etched with permanent stripes, and now you have an HOA problem and a repair bill. If the letter cites your roof, this matters double: roofs should be soft washed, never pressure washed. A professional cleaning is usually faster, safer, and less expensive than the combination of rental fees, a ruined weekend, and the damage a rushed job can cause.",
      },
      { type: "h2", text: "What a Professional Fix Looks Like" },
      {
        type: "ul",
        items: [
          "House washing with a soft wash treatment that kills the algae the HOA is citing, not just rinses it",
          "Roof cleaning that removes black gloeocapsa magma streaks without touching shingle granules",
          "Driveway and concrete cleaning that lifts mildew and grime evenly, with no wand marks",
          "Before-and-after photos you can send to the HOA as proof of compliance",
          "A realistic maintenance timeline so you are not back in this situation next year",
        ],
      },
      { type: "h2", text: "Beat the Deadline, Then Document Everything" },
      {
        type: "p",
        text: "Schedule the work at least a week or two before the compliance date, because weather delays happen and good companies book out. Once the job is done, take your own photos from the same angles the violation photos were taken, keep your invoice, and send both to the management company. That closes the loop formally. Verbal assurances do not show up in HOA files. Paper does.",
      },
      { type: "h2", text: "Why It Will Come Back If You Do Nothing Different" },
      {
        type: "p",
        text: "Here is the part nobody tells you: the letter is not really about dirt, it is about a cycle. Humidity, shade, and pollen mean the growth will return, usually within a year or two on siding and within a couple of years on a roof. Homeowners who get repeat letters are the ones who treat each notice as a one-time emergency. The smarter play is an annual or every-other-year wash on a set schedule. It keeps you off the HOA radar entirely, and maintaining clean is always easier than rescuing filthy.",
      },
      {
        type: "p",
        text: "A practical note on scheduling: communities around here tend to send letters in waves after inspections, which means the weeks after those waves are when every cleaning company in the area gets busy. If your letter arrived recently, your neighbors probably got theirs too. Call sooner rather than later so your deadline, not a booking calendar, drives the schedule.",
      },
      {
        type: "p",
        text: "One more thing: your letter almost certainly is not personal. Communities send these in batches after drive-through inspections, and half your street may have gotten one the same week. Handle it once, handle it right, and get on with your life. No Games. Just Clean.",
      },
      {
        type: "p",
        text: "Also, loop in your agent if you have one. Some HOAs have preferred vendor lists or specific requirements about methods, especially for roofs, and a quick email can save you a second visit. Most management companies just want the problem fixed properly and on time, and a professional invoice usually satisfies them on the first try.",
      },
      {
        type: "p",
        text: "Got a letter in hand and a deadline coming? Call or text Bob at 843-321-9345 for a free quote. We handle HOA compliance cleanings across Bluffton, Hilton Head Island, and Beaufort, and we can usually tell you over the phone what it will take to get compliant.",
      },
    ],
  },
  {
    slug: "how-often-clean-driveway-lowcountry",
    title: "How Often Should You Clean Your Driveway in the Lowcountry?",
    excerpt:
      "In Bluffton and Hilton Head, most driveways need professional cleaning once a year, and shaded or tree-covered concrete often needs it twice. Here is how to tell what yours needs.",
    date: "2026-07-08",
    dateLabel: "July 8, 2026",
    service: "Driveway & Concrete Cleaning",
    serviceSlug: "driveway-concrete-cleaning",
    image: "pressure-washing-rig-set-up-at-a-large-home-driveway-project.webp",
    imageAlt: "Before and after driveway concrete cleaning on a Lowcountry home",
    metaTitle: "How Often to Clean Your Driveway in the Lowcountry",
    metaDescription:
      "Most Lowcountry driveways need cleaning once a year, shaded ones twice. Learn the signs your concrete is due and why mildew here grows back so fast.",
    readTime: "6 min read",
    body: [
      {
        type: "p",
        text: "The direct answer: most driveways in Bluffton, Hilton Head, and Beaufort should be professionally cleaned once a year. If your concrete sits in shade, under trees, or stays damp after rain, plan on twice a year. That is not an upsell. That is what our humidity does to concrete.",
      },
      {
        type: "p",
        text: "In a dry climate, concrete gets dirty slowly and mostly just looks dusty. Here, concrete grows things. Algae, mildew, and mold colonize damp surfaces, and the Lowcountry gives them everything they want: warm temperatures, heavy humidity, frequent rain, and shade from the tree canopy everyone loves. The result is a driveway that goes from bright to blotchy gray-green within a single year, sometimes faster.",
      },
      { type: "h2", text: "Why Concrete Gets Dirty So Fast Here" },
      {
        type: "p",
        text: "Concrete is porous, which means it holds moisture and gives organic growth a place to anchor. Add the local ingredients and it compounds: spring pollen settles into the pores as food, summer humidity keeps the surface damp overnight, and sprinkler systems hit the same edges every morning. Shade makes it all worse, because the sun is the only free mildew killer we have. A driveway in full sun might stay respectable for a year. The same concrete under live oaks can turn slick and dark in six months.",
      },
      { type: "h2", text: "The Signs Your Driveway Is Due" },
      {
        type: "ul",
        items: [
          "Gray, green, or black blotching that does not rinse away with a garden hose",
          "Dark streaks running from the garage or down the slope after rain",
          "A slick or slimy feel underfoot in shaded sections when wet",
          "White haze or rust-colored spots from irrigation water",
          "You cannot remember the last time it was cleaned, which means it was more than a year ago",
        ],
      },
      {
        type: "p",
        text: "That slick film deserves special attention. Algae on wet concrete is genuinely slippery, and driveways are where people carry groceries, kids ride bikes, and guests walk to your door at night. A dirty driveway is an appearance issue. A slick one is a safety issue.",
      },
      { type: "h2", text: "Once a Year vs. Twice a Year" },
      {
        type: "p",
        text: "Sunny, open driveways with good drainage: once a year is usually enough, and late spring after pollen season is the sweet spot. Shaded driveways, homes under heavy tree cover, properties backing to lagoons or marsh, and anything near the water where humidity never really drops: twice a year, typically spring and fall. Sidewalks, patios, and pool decks follow the same logic, and they are usually cleaned in the same visit anyway.",
      },
      { type: "h2", text: "Why a Garden Hose and Store Cleaner Do Not Hold the Line" },
      {
        type: "p",
        text: "Rinsing moves loose dirt but does nothing about the growth living in the pores. Off-the-shelf concrete cleaners vary, but most are watered down versions of what professionals use, and the typical homeowner application is a quick scrub that kills the surface layer only. That is why a DIY driveway often looks good for a few weeks and then the blotches creep back. A professional driveway and concrete cleaning uses the right solution, even application with a surface cleaner instead of a wand, and a treatment that kills the growth at the root so it stays gone for months, not weekends.",
      },
      { type: "h2", text: "Making It Last Longer Between Cleanings" },
      {
        type: "p",
        text: "You cannot change the climate, but you can stack the odds. Trim back branches that keep concrete in permanent shade. Adjust sprinklers that soak the same driveway edges every morning. Blow or sweep leaf litter and pine straw off promptly, because decomposing organic matter stains and feeds mildew. And clean on schedule rather than waiting for it to look terrible, because light, regular cleaning is gentler on the surface than aggressive catch-up work.",
      },
      {
        type: "p",
        text: "Worth noting: the driveway is also the first surface guests and buyers see up close. If you are thinking about selling in the next year or two, keeping the concrete on a regular schedule is one of the cheapest curb appeal moves available, and it pairs naturally with house washing and roof cleaning in a single visit.",
      },
      {
        type: "p",
        text: "One more Lowcountry factor: irrigation. Many neighborhoods here run well or reclaimed water, and the overspray that hits your driveway every morning carries minerals and organic material that feed staining. If your sprinkler arc touches concrete, expect the edges to darken first and plan your cleaning schedule around it.",
      },
      {
        type: "p",
        text: "Not sure which schedule your driveway needs? Call or text Bob at 843-321-9345 for a free quote. We will look at the shade, drainage, and condition of your concrete and give you a straight answer, whether that is once a year or twice.",
      },
    ],
  },
  {
    slug: "black-streaks-on-roof",
    title: "Those Black Streaks on Your Roof Aren't Dirt. They're Alive.",
    excerpt:
      "The black streaks on Lowcountry roofs are a living algae called gloeocapsa magma. It spreads, it feeds on your shingles, and pressure washing makes it worse. Here is the real fix.",
    date: "2026-07-01",
    dateLabel: "July 1, 2026",
    service: "Roof Cleaning",
    serviceSlug: "roof-cleaning",
    image: "pool-deck-concrete-with-dark-staining-before-cleaning.webp",
    imageAlt: "Roof with black algae streaks before soft wash roof cleaning",
    metaTitle: "Black Streaks on Your Roof? It's Alive. | No BS Power Wash",
    metaDescription:
      "Black roof streaks in Bluffton and Hilton Head are gloeocapsa magma, a living algae. Learn why it spreads, why pressure washing fails, and the right fix.",
    readTime: "6 min read",
    body: [
      {
        type: "p",
        text: "The direct answer: the black streaks running down your roof are not dirt, soot, or shingle wear. They are colonies of a living algae called gloeocapsa magma, and the correct fix is a low-pressure soft wash treatment that kills it. Pressure washing a roof is the one thing you should never do.",
      },
      {
        type: "p",
        text: "Drive through any neighborhood in Bluffton, Hilton Head, or Beaufort and you will see the streaks on house after house. They usually start on the north-facing slopes and the shaded sections under trees, then spread year over year. Homeowners often assume the roof is just aging or dirty. It is actually being eaten, slowly, by an organism that our warm, humid climate treats like a resort.",
      },
      { type: "h2", text: "What Gloeocapsa Magma Actually Is" },
      {
        type: "p",
        text: "Gloeocapsa magma is a type of cyanobacteria, an airborne algae that lands on roofs and takes root. It feeds on the limestone filler used in modern asphalt shingles, which means your roof is literally its food source. The dark color is not the algae itself but the black protective coating it develops to shield itself from UV light. That is why the streaks are darkest where colonies are oldest. Left alone, it spreads across the roof, holds moisture against the shingles, and shortens the roof's life. It also traps heat, which can nudge cooling costs up in summer.",
      },
      { type: "h2", text: "Why the Lowcountry Is Ground Zero" },
      {
        type: "p",
        text: "This algae needs warmth and moisture, and we supply both most of the year. Humidity keeps shingles damp overnight, summer rains rinse spores down-slope into those telltale vertical streaks, and our mild winters never kill the colonies back. Homes near marshes, lagoons, and the coast, so most of Hilton Head and a lot of Bluffton, see it worst because ambient moisture is constant. Shaded roofs under oak and pine canopy get hit even harder.",
      },
      { type: "h2", text: "Why Pressure Washing a Roof Is a Disaster" },
      {
        type: "p",
        text: "We still see it happen, and it hurts every time. High pressure strips the ceramic granules off asphalt shingles, and those granules are the shingle's sunscreen and armor. Remove them and you age the roof years in an afternoon. Many shingle manufacturers will also void a warranty if the roof was pressure washed. And here is the kicker: blasting does not even solve the problem. It shears off the visible streaks but leaves the algae's root structure alive in the shingle, so the black comes right back, now on a damaged roof.",
      },
      { type: "h2", text: "How a Proper Roof Cleaning Works" },
      {
        type: "ul",
        items: [
          "A soft wash treatment is applied at low pressure, roughly garden-hose levels",
          "The solution kills gloeocapsa magma at the root instead of smearing it around",
          "Streaks fade as the colonies die, with results that last years rather than months",
          "Shingle granules, flashing, and warranty terms all stay intact",
          "Surrounding plants and landscaping are protected with pre- and post-rinsing",
        ],
      },
      {
        type: "p",
        text: "This is the method shingle manufacturers themselves recommend. It is gentle on everything except the algae, which is exactly the point. No Games. Just Clean.",
      },
      { type: "h2", text: "When to Treat It and How Often" },
      {
        type: "p",
        text: "If streaks are visible from the street, the colonies are well established, so sooner beats later. Fall and winter are excellent treatment windows here because cooler surfaces let the solution dwell and work without flash-drying. After a proper roof cleaning, most Lowcountry roofs stay clean for two to three years, sometimes longer on sunny, open lots. If you are planning to sell, treat the roof before listing photos: black streaks are one of the first things buyers and home inspectors flag, and a clean roof removes a negotiation lever from the table.",
      },
      {
        type: "p",
        text: "A quick way to check your own roof: stand at the curb and look for the streak pattern. Vertical dark trails running from the ridge downward are the classic signature. Also check around and below any chimney, vent, or shady overhang, where moisture lingers longest. If you see it starting, treating early is easier on the roof and easier on the invoice than waiting until the whole slope is streaked.",
      },
      {
        type: "p",
        text: "Want a straight answer on your roof? Call or text Bob at 843-321-9345 for a free quote. We will tell you whether it needs a treatment now, later, or not at all, and we will never put a pressure wand on your shingles.",
      },
    ],
  },
  {
    slug: "soft-wash-vs-pressure-wash",
    title: "Soft Wash vs. Pressure Wash: What's the Actual Difference?",
    excerpt:
      "Pressure washing uses force. Soft washing uses chemistry. The right method depends entirely on the surface, and picking wrong is how siding, roofs, and concrete get damaged.",
    date: "2026-06-24",
    dateLabel: "June 24, 2026",
    service: "Soft Washing",
    serviceSlug: "soft-washing",
    image: "curving-paver-walkway-light-tan-and-clean-after-washing.webp",
    imageAlt: "Soft washing equipment treating a Lowcountry home exterior",
    metaTitle: "Soft Wash vs. Pressure Wash: The Real Difference",
    metaDescription:
      "Soft washing kills algae with chemistry at low pressure. Pressure washing uses force for hard surfaces. Which does your Bluffton home need? Here's the answer.",
    readTime: "6 min read",
    body: [
      {
        type: "p",
        text: "The short answer: pressure washing cleans with high-pressure water and is right for hard surfaces like concrete. Soft washing cleans with specialized solutions at low pressure and is right for delicate surfaces like siding and roofs. Around here, most homes need both, on different surfaces, and knowing which is which saves you from expensive damage.",
      },
      {
        type: "p",
        text: "The two methods get lumped together constantly. People say they are getting their house pressure washed when what it actually needs is a soft wash, and the difference is not semantic. It is the difference between a cleaning that lasts and a repair bill. So here is the plain-English breakdown.",
      },
      { type: "h2", text: "What Pressure Washing Is" },
      {
        type: "p",
        text: "Pressure washing uses water at high PSI, often 2,500 to 4,000, to physically blast dirt, grime, and stains off a surface. It is mechanical cleaning: the force of the water does the work. That force is exactly what you want on hard, durable surfaces like concrete driveways, sidewalks, brick, and some pavers. On those surfaces, pressure paired with the right cleaner lifts out years of grime fast and evenly. The same force that cleans concrete beautifully is what makes pressure dangerous on anything softer.",
      },
      { type: "h2", text: "What Soft Washing Is" },
      {
        type: "p",
        text: "Soft washing applies a cleaning solution at low pressure, similar to a garden hose, and lets chemistry do the work instead of force. The solution breaks down and kills organic growth like algae, mold, and mildew at the root, then everything gets rinsed away gently. Because the growth is killed rather than sheared off, surfaces stay clean dramatically longer. Soft washing is the correct method for vinyl and Hardie siding, stucco, painted wood, screens, outdoor furniture, and roofs. It is also the method shingle manufacturers specify for roof cleaning, which tells you something.",
      },
      { type: "h2", text: "The Cheat Sheet" },
      {
        type: "ul",
        items: [
          "Pressure wash: concrete driveways, sidewalks, brick, and other hard flat surfaces",
          "Soft wash: house siding of every kind, vinyl, Hardie board, stucco, painted wood",
          "Soft wash always: roofs, because pressure strips shingle granules and can void warranties",
          "Soft wash: screened porches, lanais, and anything with screens or delicate trim",
          "Ask first: decks, fences, and older surfaces, where the right answer depends on condition",
        ],
      },
      { type: "h2", text: "Why the Difference Matters So Much in the Lowcountry" },
      {
        type: "p",
        text: "In a dry climate, pressure washing a house might just look bad. In Bluffton or Hilton Head, it actively fails. Here is why: the green and black on your siding and roof is living growth, algae and mildew that our humidity feeds year-round. High pressure removes the visible layer and leaves the roots alive in the surface, so regrowth starts immediately. Meanwhile the water you just blasted gets driven behind siding and into window seals, where our humidity keeps it damp and turns it into hidden mold. Soft washing kills the growth at the root with low pressure, so the clean lasts and nothing gets forced where it should not go.",
      },
      { type: "h2", text: "How to Tell What Your Home Needs" },
      {
        type: "p",
        text: "Look at the surface, not the dirt. Green or black film on siding, trim, porch ceilings, or the roof: soft wash. Ground-in grime, dark blotching, and slick mildew on the driveway or sidewalks: pressure washing with a surface cleaner for an even finish. Most full exterior jobs we do in the Lowcountry are a combination, soft wash on the house and porch, pressure on the concrete. Any company that proposes blasting your whole property with one machine at one setting is telling you they own one machine.",
      },
      { type: "h2", text: "The Question to Ask Any Contractor" },
      {
        type: "p",
        text: "Ask them directly: what pressure will you use on my siding, and what will you use on my roof? The correct answers are low pressure with a treatment on the siding, and no pressure, soft wash only, on the roof. If the answer to either is some version of just turning the machine down a little, keep shopping.",
      },
      {
        type: "p",
        text: "And if a contractor insists one method handles everything, that is your cue to ask follow-up questions. The honest answer in our climate is almost always a combination: chemistry where things live, force where things stick.",
      },
      {
        type: "p",
        text: "Want a straight recommendation for your place? Call or text Bob at 843-321-9345 for a free quote. We will walk the property, tell you which surfaces need which method, and explain exactly why.",
      },
    ],
  },
  {
    slug: "why-lowcountry-homes-turn-green",
    title: "Why Lowcountry Homes Turn Green (and Why Blasting It Makes It Worse)",
    excerpt:
      "The green film on Bluffton and Hilton Head siding is living algae, and our humidity feeds it year-round. Pressure washing it spreads the problem. Here is what actually works.",
    date: "2026-06-17",
    dateLabel: "June 17, 2026",
    service: "House Washing",
    serviceSlug: "house-washing",
    image: "metal-roof-with-grime-streaks-being-treated-during-a-roof-cleaning.webp",
    imageAlt: "Green algae on siding before a soft wash house washing treatment",
    metaTitle: "Why Lowcountry Homes Turn Green | No BS Power Wash",
    metaDescription:
      "Green siding in Bluffton or Hilton Head is living algae fed by humidity and shade. Why pressure washing makes it worse and how soft washing fixes it.",
    readTime: "6 min read",
    body: [
      {
        type: "p",
        text: "The direct answer: your house turns green because airborne algae lands on the siding and our heat, humidity, and shade let it grow year-round. It is alive, not just dirty, which is why rinsing or blasting it off never works for long. A soft wash treatment that kills it at the root is the fix that actually lasts.",
      },
      {
        type: "p",
        text: "Every homeowner in Bluffton, Hilton Head, or Beaufort has had the same experience. You wash the house, or it rains hard, and the siding looks fine. A few months later the north wall is green again, the area behind the shrubs is worse, and the side that never sees sun looks like it belongs to a different house. You are not imagining it, and you are not doing anything wrong. You are just living in one of the best algae habitats in North America.",
      },
      { type: "h2", text: "What the Green Stuff Actually Is" },
      {
        type: "p",
        text: "It is algae, most commonly a green variety that travels through the air as spores and lands on every exterior surface. Siding, trim, gutters, fences, porch ceilings, all of it. On its own, a spore landing on your house would amount to nothing. But spores need moisture and time to grow, and the Lowcountry provides both relentlessly. Our humidity keeps surfaces damp overnight even when it has not rained. Summer storms soak walls that dry slowly in the shade. Spring pollen coats everything in an organic film that algae happily eats. Put those together and a clean wall becomes a green wall within a season or two.",
      },
      { type: "h2", text: "Why Some Sides of Your House Are Worse" },
      {
        type: "p",
        text: "Sunlight is the enemy of algae. The south and west faces of your home get the most direct sun, dry out fast, and stay clean longest. The north and east faces get less sun, stay damp longer, and turn green first. Then there are the microclimates: the wall behind overgrown shrubs, the strip under deep eaves, the side facing a neighbor's tree line, anything near irrigation overspray. Those spots stay wet for hours after everything else dries, and algae moves in accordingly. Homes near water, marshes, and lagoons, which describes a good chunk of Hilton Head and Bluffton, get an extra dose because ambient moisture never really lets up.",
      },
      { type: "h2", text: "Why Blasting It Makes It Worse" },
      {
        type: "p",
        text: "This is the part that surprises people. Pressure washing green siding usually looks great for about a month, and then the green comes back faster and thicker than before. Three reasons. First, pressure shears off the visible algae but leaves the root structure alive in the pores and texture of the siding, so regrowth starts immediately from a larger, established base. Second, the blast can spread living spores across surfaces that were previously clean. Third, high pressure forces water behind siding and around windows, and trapped moisture in a humid climate is exactly what algae and mold want. You end up with a house that was power-washed in May and looks like it was never touched by August.",
      },
      { type: "h2", text: "What Actually Works" },
      {
        type: "ul",
        items: [
          "A soft wash treatment applied at low pressure, so nothing gets damaged or driven behind the siding",
          "A cleaning solution that kills algae and mildew at the root instead of just removing the visible layer",
          "A gentle rinse that carries the dead growth away, leaving siding clean and intact",
          "Results measured in seasons, not weeks, because dead algae does not regrow",
          "A sensible annual schedule, since the spores in our air will always come back eventually",
        ],
      },
      {
        type: "p",
        text: "That is the entire trick, and it is not really a trick: kill it, do not smear it. House washing done with a soft wash treatment keeps siding clean far longer than any amount of pressure ever will, and it is gentler on paint, caulk, and seals in the process.",
      },
      { type: "h2", text: "What You Can Do Between Washes" },
      {
        type: "p",
        text: "You cannot stop the spores, but you can make your house a worse place for them. Trim shrubs and branches back from the walls so air and sun reach the siding. Aim sprinklers away from the house. Keep gutters clear so overflow does not streak dirty water down the walls. And wash on a schedule, once a year for most Lowcountry homes, rather than waiting until the green is visible from the street. Maintaining clean siding is faster, cheaper, and easier on your house than rescuing it.",
      },
      {
        type: "p",
        text: "Tired of watching your house go green every summer? Call or text Bob at 843-321-9345 for a free quote. We will soft wash it properly, kill the growth at the root, and tell you honestly how often your particular house needs it. No Games. Just Clean.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
