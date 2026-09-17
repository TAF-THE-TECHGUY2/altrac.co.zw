// -----------------------------------------------------------------------------
// Equipment catalogue — the single source of truth for the Home page catalog
// section.
//
// HOW TO ADD REAL PHOTOS:
//   1. Drop the image file into `public/equipment/`.
//   2. Point the item's `image` field at it, e.g. '/equipment/hyundai-tlb.jpg'.
// Until the file exists the UI shows a branded placeholder automatically.
// -----------------------------------------------------------------------------

export const CATALOG_CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'excavator', label: 'Excavators' },
  { key: 'dozer', label: 'Dozers' },
  { key: 'loader', label: 'Loaders' },
  { key: 'tlb', label: 'TLBs' },
  { key: 'grader', label: 'Graders' },
  { key: 'roller', label: 'Rollers' },
  { key: 'tipper', label: 'Tippers' },
  { key: 'lowbed', label: 'Lowbeds' },
  { key: 'waterbowser', label: 'Water Bowsers' },
  { key: 'roadworks', label: 'Roadworks' },
]

export const CATALOG = [
  // ---------------------------- LOADERS ----------------------------------
  {
    id: 'shantui-sl30-loader',
    name: 'Shantui SL30 Front End Loader',
    category: 'loader',
    categoryLabel: 'Loader',
    qty: 1,
    description:
      'Compact front end loader suitable for construction and earthmoving operations.',
    image: '/equipment/shantui-sl30-loader.jpg',
  },
  {
    id: 'shantui-sl60-loader',
    name: 'Shantui SL60 Front End Loader',
    category: 'loader',
    categoryLabel: 'Loader',
    qty: 1,
    description:
      'Heavy-duty front end loader suited to bulk material handling, loading trucks and large earthmoving operations.',
    image: '/equipment/shantui-sl60-loader.jpg',
  },

  // ---------------------------- DOZERS ----------------------------------
  {
    id: 'cat-d6r',
    name: 'CAT D6R Dozer',
    category: 'dozer',
    categoryLabel: 'Dozer',
    qty: 1,
    description:
      'Powerful crawler dozer designed for site preparation, material pushing and demanding earthmoving operations.',
    image: '/equipment/cat-d6r-dozer.jpg',
  },
  {
    id: 'cat-d7h',
    name: 'CAT D7H Dozer',
    category: 'dozer',
    categoryLabel: 'Dozer',
    qty: 1,
    description:
      'Powerful bulldozer designed for grading, clearing and heavy pushing.',
    image: '/equipment/cat-d7f-dozer.jpg',
  },
  {
    id: 'cat-d7g',
    name: 'CAT D7G Dozer',
    category: 'dozer',
    categoryLabel: 'Dozer',
    qty: 3,
    description:
      'Reliable crawler dozer for mining, roadworks and construction projects.',
    image: '/equipment/cat-d7f-dozer.jpg',
  },

  // ---------------------------- EXCAVATORS ----------------------------------
  {
    id: '22-ton-excavator',
    name: '22 Ton Excavator',
    category: 'excavator',
    categoryLabel: 'Excavator',
    qty: 1,
    description:
      'Heavy-duty excavator suited to bulk earthworks, trenching, foundations and general civil construction.',
    image: '/equipment/22-ton-excavator.jpg',
  },

  // ---------------------------- TLBS ----------------------------------
  {
    id: 'hyundai-tlb',
    name: 'Hyundai TLB',
    category: 'tlb',
    categoryLabel: 'TLB',
    qty: 1,
    description:
      'Versatile tractor loader backhoe for excavation, loading, trenching and general construction work.',
    image: '/equipment/hyundai-tlb.jpg',
  },

  // ---------------------------- GRADERS ----------------------------------
  {
    id: 'cat-140g',
    name: 'CAT 140G Grader',
    category: 'grader',
    categoryLabel: 'Grader',
    qty: 4,
    description:
      'Heavy-duty motor grader for large-scale earthworks and road projects.',
    image: '/equipment/cat-140g-grader.jpg',
  },
  {
    id: 'cat-140h',
    name: 'CAT 140H Grader',
    category: 'grader',
    categoryLabel: 'Grader',
    qty: 1,
    description:
      'High-performance grader designed for precision grading applications.',
    image: '/equipment/cat-140-grader.jpg',
  },

  // ---------------------------- ROLLERS ----------------------------------
  {
    id: '20-ton-pneumatic-roller',
    name: '20 Ton Pneumatic Roller',
    category: 'roller',
    categoryLabel: 'Pneumatic Roller',
    qty: 1,
    description:
      'Pneumatic roller designed for road compaction, surface finishing and achieving uniform density.',
    image: '/equipment/shantui-20t-roller.jpg',
  },
  {
    id: 'case-14-ton-roller',
    name: 'CASE 14 Ton Roller',
    category: 'roller',
    categoryLabel: 'Roller',
    qty: 1,
    description:
      'Heavy compaction roller suited to road construction, earthworks and preparation of base layers.',
    image: '/equipment/case-14-ton-roller.jpg',
  },
  {
    id: 'shantui-19t',
    name: 'Shantui 19 Ton Roller',
    category: 'roller',
    categoryLabel: 'Roller',
    qty: 1,
    description:
      'Self-propelled roller for soil and asphalt compaction.',
    image: '/equipment/shantui-19t-roller.jpg',
  },
  {
    id: 'shantui-22t',
    name: 'Shantui 22 Ton Roller',
    category: 'roller',
    categoryLabel: 'Roller',
    qty: 1,
    description:
      'Heavy-duty roller designed for effective compaction of soil, gravel and road construction layers.',
    image: '/equipment/shantui-22t-roller.jpg',
  },
  {
    id: 'shantui-26t',
    name: 'Shantui 26 Ton Pneumatic Roller',
    category: 'roller',
    categoryLabel: 'Pneumatic Roller',
    qty: 1,
    description:
      'Heavy pneumatic roller for road construction and asphalt compaction.',
    image: '/equipment/shantui-26tpneumatic-roller.jpg',
  },

  // ---------------------------- TIPPERS ----------------------------------
  {
    id: '20m3-tipper',
    name: '20m³ Tipper Truck',
    category: 'tipper',
    categoryLabel: 'Tipper',
    qty: 4,
    description:
      'Large-capacity tipper truck for transporting soil, gravel, sand, rubble and other bulk construction materials.',
    image: '/equipment/20m3-tipper-truck.jpg',
  },

  // ---------------------------- LOWBEDS ----------------------------------
  {
    id: '25-ton-lowbed',
    name: '25 Ton Lowbed',
    category: 'lowbed',
    categoryLabel: 'Lowbed',
    qty: 1,
    description:
      'Lowbed trailer used for safely transporting heavy construction machinery between project sites.',
    image: '/equipment/25-ton-lowbed.jpg',
  },
  {
    id: '35-ton-lowbed',
    name: '35 Ton Lowbed',
    category: 'lowbed',
    categoryLabel: 'Lowbed',
    qty: 1,
    description:
      'Heavy-duty lowbed designed for transporting larger plant and construction equipment.',
    image: '/equipment/35-ton-lowbed.jpg',
  },

  // ---------------------------- WATER BOWSERS ----------------------------------
  {
    id: 'water-bowser',
    name: 'Water Bowser',
    category: 'waterbowser',
    categoryLabel: 'Water Bowser',
    qty: 3,
    description:
      'Water bowser used for dust suppression, moisture conditioning and supporting road and earthworks operations.',
    image: '/equipment/16000lwater-bowser.jpg',
  },

  // ---------------------------- ROADWORKS ----------------------------------
  {
    id: 'bitumen-distributor-5000l',
    name: 'Bitumen Distributor 5000L',
    category: 'roadworks',
    categoryLabel: 'Bitumen Distributor',
    qty: 1,
    description:
      'Road construction unit used for controlled application of bitumen during surfacing and maintenance works.',
    image: '/equipment/bitumen-distributor-5000l.jpg',
  },
  {
    id: 'chip-spreader',
    name: 'Chip Spreader',
    category: 'roadworks',
    categoryLabel: 'Chip Spreader',
    qty: 1,
    description:
      'Roadworks machine used to distribute aggregate evenly during chip seal and road surfacing operations.',
    image: '/equipment/chip-spreader.jpg',
  },
  {
    id: 'phoenix-chip-spreader',
    name: 'Phoenix Chip Spreader',
    category: 'roadworks',
    categoryLabel: 'Chip Spreader',
    qty: 1,
    description:
      'Specialised chip spreader used for accurate aggregate distribution during road surfacing and resealing work.',
    image: '/equipment/phoenix-chip-spreader.jpg',
  },
]

export function filterCatalog(categoryKey) {
  if (!categoryKey || categoryKey === 'all') return CATALOG
  return CATALOG.filter((item) => item.category === categoryKey)
}

/**
 * Free-text search across a catalogue list. Matches machine name, category
 * label and description so "roller", "cat" or "bitumen" all find something.
 */
export function searchCatalog(list, query) {
  const q = query?.trim().toLowerCase()
  if (!q) return list
  return list.filter((item) =>
    [item.name, item.categoryLabel, item.description]
      .filter(Boolean)
      .some((field) => field.toLowerCase().includes(q)),
  )
}
