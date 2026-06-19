// -----------------------------------------------------------------------------
// Fleet / equipment catalogue (sourced from the ALTRAC plant schedule).
//
// HOW TO ADD REAL PHOTOS LATER:
//   1. Drop image files into the `public/equipment/` folder.
//   2. Set each item's `image` field to its path, e.g. '/equipment/cat-325.jpg'.
// Until a real image is provided (or if the file is missing), the UI shows a
// branded placeholder automatically — nothing else needs to change.
// -----------------------------------------------------------------------------

// Filter categories used by the buttons on the Home + Vehicles pages.
// `key` must match the `category` field on each equipment item.
export const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'excavators', label: 'Excavators' },
  { key: 'dozers', label: 'Dozers' },
  { key: 'graders', label: 'Graders' },
  { key: 'loaders', label: 'Loaders' },
  { key: 'tippers', label: 'Tippers' },
  { key: 'compactors', label: 'Compactors' },
]

export const EQUIPMENT = [
  // ---------------------------- EXCAVATORS ----------------------------------
  {
    id: 'cat-325-excavator',
    name: 'CAT 325 Excavator',
    category: 'excavators',
    categoryLabel: 'Excavator',
    qty: 1,
    image: '/equipment/cat-325-excavator.jpg',
    specs: ['25 t class', 'Bulk excavation', 'Trenching'],
    description:
      'Heavy-duty tracked excavator for bulk earthworks, foundations and deep trenching on demanding sites.',
  },
  {
    id: 'cat-320-excavator',
    name: 'CAT 320 Excavator',
    category: 'excavators',
    categoryLabel: 'Excavator',
    qty: 1,
    image: '/equipment/cat-320-excavator.jpg',
    specs: ['20 t class', 'Versatile', 'Fuel efficient'],
    description:
      'Reliable mid-size excavator ideal for site clearing, drainage works and general civil construction.',
  },
  {
    id: 'sany-sy215-excavator',
    name: 'Sany SY215 Excavator',
    category: 'excavators',
    categoryLabel: 'Excavator',
    qty: 1,
    image: '/equipment/sany-sy215-excavator.jpg',
    specs: ['21 t class', 'High breakout', 'Long reach'],
    description:
      'Powerful hydraulic excavator with strong digging force for quarrying, loading and mass earthmoving.',
  },

  // ------------------------------- DOZERS -----------------------------------
  {
    id: 'cat-d7g-dozer',
    name: 'CAT D7G Bulldozer',
    category: 'dozers',
    categoryLabel: 'Bulldozer',
    qty: 3,
    image: '/equipment/cat-d7g-dozer.jpg',
    specs: ['Heavy dozing', 'Ripping', 'Land clearing'],
    description:
      'Workhorse track-type dozer for land clearing, bulk push, ripping and dam construction.',
  },
  {
    id: 'cat-d7h-dozer',
    name: 'CAT D7H Bulldozer',
    category: 'dozers',
    categoryLabel: 'Bulldozer',
    qty: 2,
    image: '/equipment/cat-d7h-dozer.jpg',
    specs: ['High drive', 'Powerful', 'Earth dams'],
    description:
      'High-drive bulldozer delivering strong, sustained pushing power for major earthworks.',
  },
  {
    id: 'cat-d7f-dozer',
    name: 'CAT D7F Bulldozer',
    category: 'dozers',
    categoryLabel: 'Bulldozer',
    qty: 2,
    image: '/equipment/cat-d7f-dozer.jpg',
    specs: ['Bulk push', 'Rugged', 'Site prep'],
    description:
      'Dependable dozer for site preparation, stripping and pushing material across large areas.',
  },
  {
    id: 'cat-d6h-dozer',
    name: 'CAT D6H Bulldozer',
    category: 'dozers',
    categoryLabel: 'Bulldozer',
    qty: 1,
    image: '/equipment/cat-d6h-dozer.jpg',
    specs: ['Fine grading', 'Versatile', 'Spreading'],
    description:
      'Mid-size dozer well suited to fine dozing, spreading and finishing on roads and platforms.',
  },

  // ------------------------------ GRADERS -----------------------------------
  {
    id: 'cat-140g-grader',
    name: 'CAT 140G Motor Grader',
    category: 'graders',
    categoryLabel: 'Grader',
    qty: 3,
    image: '/equipment/cat-140g-grader.jpg',
    specs: ['Road formation', '3.7m blade', 'Fine grading'],
    description:
      'Workhorse motor grader for road formation, gravel road maintenance and precise levelling.',
  },
  {
    id: 'cat-140h-grader',
    name: 'CAT 140H Motor Grader',
    category: 'graders',
    categoryLabel: 'Grader',
    qty: 1,
    image: '/equipment/cat-140h-grader.jpg',
    specs: ['Road formation', 'High accuracy', 'Finishing'],
    description:
      'Modern motor grader delivering accurate finishing for highways, runways and large platforms.',
  },
  {
    id: 'cat-120g-grader',
    name: 'CAT 120G Motor Grader',
    category: 'graders',
    categoryLabel: 'Grader',
    qty: 1,
    image: '/equipment/cat-120g-grader.jpg',
    specs: ['Light grading', 'Maneuverable', 'Drain opening'],
    description:
      'Agile grader suited to municipal roads, drain opening and lighter grading and shaping work.',
  },

  // ------------------------------ LOADERS -----------------------------------
  {
    id: 'cat-920-loader',
    name: 'CAT 920 Front End Loader',
    category: 'loaders',
    categoryLabel: 'Loader',
    qty: 5,
    image: '/equipment/cat-920-loader.jpg',
    specs: ['Loading', 'Stockpiling', 'Quick cycle'],
    description:
      'Dependable wheel loader for loading trucks, stockpiling material and general yard handling.',
  },
  {
    id: 'shantui-sl30-loader',
    name: 'Shantui SL30 Front End Loader',
    category: 'loaders',
    categoryLabel: 'Loader',
    qty: 1,
    image: '/equipment/shantui-sl30-loader.jpg',
    specs: ['3 m³ bucket', 'High capacity', 'Rugged'],
    description:
      'High-capacity front end loader built for heavy loading duties in quarries and bulk yards.',
  },
  {
    id: 'cat-428-backhoe',
    name: 'CAT 428 Backhoe Loader',
    category: 'loaders',
    categoryLabel: 'Backhoe Loader',
    qty: 1,
    image: '/equipment/cat-428-backhoe.jpg',
    specs: ['Dig & load', 'Compact', 'Multi-purpose'],
    description:
      'Versatile backhoe loader combining loading and excavating — perfect for tight urban sites.',
  },

  // ------------------------------ TIPPERS -----------------------------------
  {
    id: 'foden-15m3-tipper',
    name: 'Foden 15m³ Tipper Truck',
    category: 'tippers',
    categoryLabel: 'Tipper',
    qty: 4,
    image: '/equipment/foden-15m3-tipper.jpg',
    specs: ['15 m³ body', 'Bulk haulage', 'Site & road'],
    description:
      'Large-capacity tippers for hauling soil, gravel, sand and rubble between site and stockpile.',
  },
  {
    id: 'ford-6610-dumper',
    name: 'Ford 6610 Tractor Dumper',
    category: 'tippers',
    categoryLabel: 'Tractor Dumper',
    qty: 3,
    image: '/equipment/ford-6610-dumper.jpg',
    specs: ['Site haulage', 'Agile', 'Tight access'],
    description:
      'Tractor-drawn dumpers for moving material around site, especially where access is tight.',
  },
  {
    id: 'bell-b25b-dumper',
    name: 'Bell B25B Articulated Dumper',
    category: 'tippers',
    categoryLabel: 'ADT Dumper',
    qty: 1,
    image: '/equipment/bell-b25b-dumper.jpg',
    specs: ['25 t payload', 'Off-road', 'Rough terrain'],
    description:
      'Articulated dump truck for high-volume haulage across rough, off-road earthmoving sites.',
  },
  {
    id: 'water-bowser-16000',
    name: '16,000L Water Bowser Truck',
    category: 'tippers',
    categoryLabel: 'Water Truck',
    qty: 2,
    image: '/equipment/water-bowser-16000.jpg',
    specs: ['16,000 L tank', 'Dust control', 'Compaction'],
    description:
      'Truck-mounted water bowser for dust suppression and moisture conditioning during compaction.',
  },

  // ---------------------------- COMPACTORS ----------------------------------
  {
    id: 'shantui-19t-roller',
    name: 'Shantui 19T Self-Propelled Roller',
    category: 'compactors',
    categoryLabel: 'Roller',
    qty: 1,
    image: '/equipment/shantui-19t-roller.jpg',
    specs: ['19 t', 'Vibratory', 'Sub-base'],
    description:
      'Self-propelled vibratory roller for compacting sub-base and base layers on roads and dams.',
  },
  {
    id: 'shantui-26t-pneumatic',
    name: 'Shantui 26T Pneumatic Roller',
    category: 'compactors',
    categoryLabel: 'Pneumatic Roller',
    qty: 1,
    image: '/equipment/shantui-26t-pneumatic.jpg',
    specs: ['26 t', 'Pneumatic tyred', 'Surfacing'],
    description:
      'Pneumatic-tyred roller for sealing and finishing surfacing layers to a tight compaction.',
  },
  {
    id: 'tractor-drawn-rollers',
    name: 'Tractor-Drawn Rollers',
    category: 'compactors',
    categoryLabel: 'Towed Roller',
    qty: 3,
    image: '/equipment/tractor-drawn-rollers.jpg',
    specs: ['10 t & 30 t', 'Towed', 'Bulk compaction'],
    description:
      'Towed rollers (10-tonne and 30-tonne) for bulk compaction of fill on large earthworks.',
  },
]

// Full plant schedule (with quantities) exactly as listed in the company profile.
export const FLEET_SCHEDULE = [
  { qty: 5, name: 'Front End Loader', model: 'CAT 920' },
  { qty: 3, name: 'Bulldozer', model: 'CAT D7G' },
  { qty: 2, name: 'Bulldozer', model: 'CAT D7H' },
  { qty: 2, name: 'Bulldozer', model: 'CAT D7F' },
  { qty: 1, name: 'Bulldozer', model: 'CAT D6H' },
  { qty: 3, name: 'Motor Grader', model: 'CAT 140G' },
  { qty: 1, name: 'Motor Grader', model: 'CAT 140H' },
  { qty: 1, name: 'Motor Grader', model: 'CAT 120G' },
  { qty: 1, name: 'Motor Grader', model: 'CAT 120' },
  { qty: 1, name: 'Backhoe Loader', model: 'CAT 428' },
  { qty: 1, name: 'Front End Loader', model: 'Shantui SL30' },
  { qty: 1, name: 'Excavator', model: 'CAT 325' },
  { qty: 1, name: 'Excavator', model: 'CAT 320' },
  { qty: 1, name: 'Excavator', model: 'Sany SY215' },
  { qty: 4, name: 'Tipper Truck (15 m³)', model: 'Foden' },
  { qty: 3, name: 'Tractor Dumper', model: 'Ford 6610' },
  { qty: 1, name: 'Articulated Dumper', model: 'Bell B25B' },
  { qty: 1, name: 'Self-Propelled Roller', model: 'Shantui 19T' },
  { qty: 1, name: 'Pneumatic Roller', model: 'Shantui 26T' },
  { qty: 1, name: 'Pneumatic Roller', model: '20T' },
  { qty: 3, name: 'Tractor-Drawn Rollers', model: '1 × 10 t / 2 × 30 t' },
  { qty: 2, name: 'Water Bowser (truck)', model: '16,000 L' },
  { qty: 2, name: 'Water Bowser (towed)', model: '8,000 L' },
  { qty: 2, name: 'Water Bowser (towed)', model: '5,000 L' },
]

/** Return equipment filtered by category key ('all' returns everything). */
export function filterEquipment(categoryKey) {
  if (!categoryKey || categoryKey === 'all') return EQUIPMENT
  return EQUIPMENT.filter((item) => item.category === categoryKey)
}

/** Free-text search across name, category, description and specs. */
export function searchEquipment(items, query) {
  const term = (query || '').trim().toLowerCase()
  if (!term) return items
  return items.filter((item) =>
    [item.name, item.categoryLabel, item.description, ...(item.specs || [])]
      .join(' ')
      .toLowerCase()
      .includes(term),
  )
}
