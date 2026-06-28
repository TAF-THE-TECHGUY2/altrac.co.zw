// -----------------------------------------------------------------------------
// Equipment catalogue (homepage catalog section).
// Photos are hosted on Unsplash. To use your own images, replace the `image`
// URL with a local path, e.g. '/equipment/liugong-922d.jpg'.
// -----------------------------------------------------------------------------

export const CATALOG_CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'excavator', label: 'Excavator' },
  { key: 'dozer', label: 'Dozer' },
  { key: 'tlb', label: 'TLB' },
  { key: 'loader', label: 'Loader' },
  { key: 'tipper', label: 'Tipper' },
  { key: 'lowbed', label: 'Lowbed Truck' },
]

export const CATALOG = [
  // ---------------------------- EXCAVATORS ----------------------------------
  {
    id: 'liugong-922d',
    name: 'Liugong 922D',
    category: 'excavator',
    categoryLabel: 'Excavator',
    description: '22-tonne hydraulic excavator for bulk excavation and trenching.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600',
  },
  {
    id: 'liebherr-r920',
    name: 'Liebherr R920',
    category: 'excavator',
    categoryLabel: 'Excavator',
    description: '24-tonne medium-duty excavator for versatile civil works.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600',
  },
  {
    id: 'liebherr-r930',
    name: 'Liebherr R930',
    category: 'excavator',
    categoryLabel: 'Excavator',
    description: '36-tonne heavy-duty excavator for the most demanding sites.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
  },

  // ------------------------------- DOZERS -----------------------------------
  {
    id: 'caterpillar-d6t',
    name: 'Caterpillar D6T',
    category: 'dozer',
    categoryLabel: 'Dozer',
    description: 'Powerful crawler dozer for pushing large volumes of earth.',
    image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600',
  },
  {
    id: 'komatsu-d65',
    name: 'Komatsu D65',
    category: 'dozer',
    categoryLabel: 'Dozer',
    description: 'Versatile dozer for grading and land clearing.',
    image: 'https://images.unsplash.com/photo-1567449303078-57ad995bd17f?w=600',
  },

  // -------------------------------- TLB -------------------------------------
  {
    id: 'jcb-3cx',
    name: 'JCB 3CX',
    category: 'tlb',
    categoryLabel: 'TLB',
    description: 'Compact backhoe loader for trenching and utility work.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600',
  },
  {
    id: 'case-580',
    name: 'Case 580',
    category: 'tlb',
    categoryLabel: 'TLB',
    description: 'Industry-standard TLB for landscaping and excavation.',
    image: 'https://images.unsplash.com/photo-1566041510394-cf7c1b1eaaab?w=600',
  },

  // ------------------------------ LOADER ------------------------------------
  {
    id: 'caterpillar-950gc',
    name: 'Caterpillar 950GC',
    category: 'loader',
    categoryLabel: 'Loader',
    description: 'Wheel loader for material handling and truck loading.',
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600',
  },

  // ------------------------------ TIPPER ------------------------------------
  {
    id: 'bell-b25e',
    name: 'Bell B25E',
    category: 'tipper',
    categoryLabel: 'Tipper',
    description: '25-tonne articulated dump truck for rough terrain hauling.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600',
  },

  // --------------------------- LOWBED TRUCK ---------------------------------
  {
    id: 'interdaf-lowbed',
    name: 'Interdaf Lowbed',
    category: 'lowbed',
    categoryLabel: 'Lowbed Truck',
    description: 'Heavy haulage for transporting oversized equipment.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600',
  },
]

export function filterCatalog(categoryKey) {
  if (!categoryKey || categoryKey === 'all') return CATALOG
  return CATALOG.filter((item) => item.category === categoryKey)
}
