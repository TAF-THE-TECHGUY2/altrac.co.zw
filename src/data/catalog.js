export const CATALOG_CATEGORIES = [
    { key: 'all', label: 'All' },
    { key: 'excavator', label: 'Excavators' },
    { key: 'dozer', label: 'Dozers' },
    { key: 'loader', label: 'Loaders' },
    { key: 'tlb', label: 'TLBs' },
    { key: 'grader', label: 'Graders' },
    { key: 'roller', label: 'Rollers' },
    { key: 'tipper', label: 'Tippers & Dumpers' },
    { key: 'waterbowser', label: 'Water Bowsers' },
  ]
  
  export const CATALOG = [
    // ---------------------------- LOADERS ----------------------------------
    {
      id: 'cat-920-loader',
      name: 'CAT 920 Front End Loader',
      category: 'loader',
      categoryLabel: 'Loader',
      description: 'Versatile front end loader for loading, stockpiling, and material handling.',
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600',
    },
    {
      id: 'shantui-sl30-loader',
      name: 'Shantui SL30 Front End Loader',
      category: 'loader',
      categoryLabel: 'Loader',
      description: 'Compact front end loader suitable for construction and earthmoving operations.',
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600',
    },
  
    // ---------------------------- DOZERS ----------------------------------
    {
      id: 'cat-d7f',
      name: 'CAT D7F Dozer',
      category: 'dozer',
      categoryLabel: 'Dozer',
      description: 'Heavy-duty crawler dozer for bulk earthmoving and site preparation.',
      image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600',
    },
    {
      id: 'cat-d7h',
      name: 'CAT D7H Dozer',
      category: 'dozer',
      categoryLabel: 'Dozer',
      description: 'Powerful bulldozer designed for grading, clearing and heavy pushing.',
      image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600',
    },
    {
      id: 'cat-d7g',
      name: 'CAT D7G Dozer',
      category: 'dozer',
      categoryLabel: 'Dozer',
      description: 'Reliable crawler dozer for mining, roadworks and construction projects.',
      image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600',
    },
    {
      id: 'cat-d6',
      name: 'CAT D6 Dozer',
      category: 'dozer',
      categoryLabel: 'Dozer',
      description: 'Medium-sized bulldozer for land clearing, grading and earthmoving.',
      image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600',
    },
  
    // ---------------------------- EXCAVATORS ----------------------------------
    {
      id: 'cat-325',
      name: 'CAT 325 Excavator',
      category: 'excavator',
      categoryLabel: 'Excavator',
      description: 'Hydraulic excavator suitable for excavation, trenching and heavy digging.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600',
    },
    {
      id: 'cat-320',
      name: 'CAT 320 Excavator',
      category: 'excavator',
      categoryLabel: 'Excavator',
      description: 'Versatile excavator ideal for civil engineering and construction work.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600',
    },
    {
      id: 'sany-sy215',
      name: 'SANY SY215 Excavator',
      category: 'excavator',
      categoryLabel: 'Excavator',
      description: '21.5-ton hydraulic excavator for efficient digging and site development.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600',
    },
  
    // ---------------------------- TLBS ----------------------------------
    {
      id: 'cat-428-tlb',
      name: 'CAT 428 Backhoe Loader',
      category: 'tlb',
      categoryLabel: 'TLB',
      description: 'Backhoe loader for excavation, trenching and utility installation.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600',
    },
  
    // ---------------------------- GRADERS ----------------------------------
    {
      id: 'cat-120g',
      name: 'CAT 120G Grader',
      category: 'grader',
      categoryLabel: 'Grader',
      description: 'Motor grader for road construction, levelling and finishing.',
      image: 'https://images.unsplash.com/photo-1566041510394-cf7c1b1eaaab?w=600',
    },
    {
      id: 'cat-120',
      name: 'CAT 120 Grader',
      category: 'grader',
      categoryLabel: 'Grader',
      description: 'Reliable grader for fine grading and road maintenance.',
      image: 'https://images.unsplash.com/photo-1566041510394-cf7c1b1eaaab?w=600',
    },
    {
      id: 'cat-140g',
      name: 'CAT 140G Grader',
      category: 'grader',
      categoryLabel: 'Grader',
      description: 'Heavy-duty motor grader for large-scale earthworks and road projects.',
      image: 'https://images.unsplash.com/photo-1566041510394-cf7c1b1eaaab?w=600',
    },
    {
      id: 'cat-140h',
      name: 'CAT 140H Grader',
      category: 'grader',
      categoryLabel: 'Grader',
      description: 'High-performance grader designed for precision grading applications.',
      image: 'https://images.unsplash.com/photo-1566041510394-cf7c1b1eaaab?w=600',
    },
  
    // ---------------------------- ROLLERS ----------------------------------
    {
      id: 'tractor-drawn-rollers',
      name: 'Tractor Drawn Rollers',
      category: 'roller',
      categoryLabel: 'Roller',
      description: '10-ton and 30-ton rollers for soil and surface compaction.',
      image: 'https://images.unsplash.com/photo-1516822003754-cca485356ecb?w=600',
    },
    {
      id: 'shantui-26t',
      name: 'Shantui 26T Pneumatic Roller',
      category: 'roller',
      categoryLabel: 'Roller',
      description: 'Heavy pneumatic roller for road construction and asphalt compaction.',
      image: 'https://images.unsplash.com/photo-1516822003754-cca485356ecb?w=600',
    },
    {
      id: 'shantui-19t',
      name: 'Shantui 19T Self Propelled Roller',
      category: 'roller',
      categoryLabel: 'Roller',
      description: 'Self-propelled roller for soil and asphalt compaction.',
      image: 'https://images.unsplash.com/photo-1516822003754-cca485356ecb?w=600',
    },
    {
      id: 'shantui-20t-pneumatic-roller',
      name: 'Shantui 20T Pneumatic Roller',
      category: 'roller',
      categoryLabel: 'Roller',
      description: 'Pneumatic roller designed for compaction and finishing work.',
      image: 'https://images.unsplash.com/photo-1516822003754-cca485356ecb?w=600',
    },
  
    // ---------------------------- TIPPERS ----------------------------------
    {
      id: 'bell-b25b',
      name: 'Bell B25B Dumper',
      category: 'tipper',
      categoryLabel: 'Tipper',
      description: 'Articulated dumper for transporting earth and bulk material across rough terrain.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600',
    },
    {
      id: 'foden-15m3',
      name: '15m³ Foden Tipper',
      category: 'tipper',
      categoryLabel: 'Tipper',
      description: 'Heavy-duty tipper truck for transporting aggregates, sand and construction materials.',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600',
    },
    {
      id: 'ford-6610',
      name: 'Ford 6610 Tractor Dumper',
      category: 'tipper',
      categoryLabel: 'Tipper',
      description: 'Tractor dumper for hauling materials around construction and mining sites.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600',
    },
  
    // ---------------------------- WATER BOWSERS ----------------------------------
    {
      id: 'water-bowser-8000',
      name: '8,000L Water Bowser',
      category: 'waterbowser',
      categoryLabel: 'Water Bowser',
      description: 'Towable water bowser for dust suppression and water supply.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600',
    },
    {
      id: 'water-bowser-5000',
      name: '5,000L Water Bowser',
      category: 'waterbowser',
      categoryLabel: 'Water Bowser',
      description: 'Towable water bowser for construction sites and dust control.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600',
    },
    {
      id: 'water-truck-16000',
      name: '16,000L Water Bowser Truck',
      category: 'waterbowser',
      categoryLabel: 'Water Bowser',
      description: 'Large-capacity water truck for roadworks, mining and dust suppression.',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600',
    },
  ]
  
  export function filterCatalog(categoryKey) {
    if (!categoryKey || categoryKey === 'all') return CATALOG
    return CATALOG.filter((item) => item.category === categoryKey)
  }