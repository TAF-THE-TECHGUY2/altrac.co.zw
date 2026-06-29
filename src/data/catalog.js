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
      image: '/equipment/cat-920-loader.jpg',
    },
    {
      id: 'shantui-sl30-loader',
      name: 'Shantui SL30 Front End Loader',
      category: 'loader',
      categoryLabel: 'Loader',
      description: 'Compact front end loader suitable for construction and earthmoving operations.',
      image: '/equipment/shantui-sl30-loader.jpg',
    },
  
    // ---------------------------- DOZERS ----------------------------------
    {
      id: 'cat-d7f',
      name: 'CAT D7F Dozer',
      category: 'dozer',
      categoryLabel: 'Dozer',
      description: 'Heavy-duty crawler dozer for bulk earthmoving and site preparation.',
      image: '/equipment/cat-d7f-dozer.jpg',
    },
    {
      id: 'cat-d7h',
      name: 'CAT D7H Dozer',
      category: 'dozer',
      categoryLabel: 'Dozer',
      description: 'Powerful bulldozer designed for grading, clearing and heavy pushing.',
      image: '/equipment/cat-d7f-dozer.jpg',
    },
    {
      id: 'cat-d7g',
      name: 'CAT D7G Dozer',
      category: 'dozer',
      categoryLabel: 'Dozer',
      description: 'Reliable crawler dozer for mining, roadworks and construction projects.',
      image: '/equipment/cat-d7f-dozer.jpg',
    },
    {
      id: 'cat-d6',
      name: 'CAT D6 Dozer',
      category: 'dozer',
      categoryLabel: 'Dozer',
      description: 'Medium-sized bulldozer for land clearing, grading and earthmoving.',
      image: '/equipment/cat-d6-dozer.jpg',
    },
  
    // ---------------------------- EXCAVATORS ----------------------------------
    {
      id: 'cat-325',
      name: 'CAT 325 Excavator',
      category: 'excavator',
      categoryLabel: 'Excavator',
      description: 'Hydraulic excavator suitable for excavation, trenching and heavy digging.',
      image: '/equipment/cat-325-exacavator.jpg',
    },
    {
      id: 'cat-320',
      name: 'CAT 320 Excavator',
      category: 'excavator',
      categoryLabel: 'Excavator',
      description: 'Versatile excavator ideal for civil engineering and construction work.',
      image: '/equipment/cat-320-exacavator.jpg',
    },
    {
      id: 'sany-sy215',
      name: 'SANY SY215 Excavator',
      category: 'excavator',
      categoryLabel: 'Excavator',
      description: '21.5-ton hydraulic excavator for efficient digging and site development.',
      image: '/equipment/sany-sy215-excavator.jpg',
    },
  
    // ---------------------------- TLBS ----------------------------------
    {
      id: 'cat-428-tlb',
      name: 'CAT 428 Backhoe Loader',
      category: 'tlb',
      categoryLabel: 'TLB',
      description: 'Backhoe loader for excavation, trenching and utility installation.',
      image: '/equipment/cat-428-tlb.jpg',
    },
  
    // ---------------------------- GRADERS ----------------------------------
    {
      id: 'cat-120g',
      name: 'CAT 120G Grader',
      category: 'grader',
      categoryLabel: 'Grader',
      description: 'Motor grader for road construction, levelling and finishing.',
      image: '/equipment/cat-120gc-grader.jpg',
    },
    {
      id: 'cat-120',
      name: 'CAT 120 Grader',
      category: 'grader',
      categoryLabel: 'Grader',
      description: 'Reliable grader for fine grading and road maintenance.',
      image: '/equipment/cat-120-grader.jpg',
    },
    {
      id: 'cat-140g',
      name: 'CAT 140G Grader',
      category: 'grader',
      categoryLabel: 'Grader',
      description: 'Heavy-duty motor grader for large-scale earthworks and road projects.',
      image: '/equipment/cat-140g-grader.jpg',
    },
    {
      id: 'cat-140h',
      name: 'CAT 140H Grader',
      category: 'grader',
      categoryLabel: 'Grader',
      description: 'High-performance grader designed for precision grading applications.',
      image: '/equipment/cat-140-grader.jpg',
    },
  
    // ---------------------------- ROLLERS ----------------------------------
    {
      id: 'tractor-drawn-rollers',
      name: 'Tractor Drawn Rollers',
      category: 'roller',
      categoryLabel: 'Roller',
      description: '10-ton and 30-ton rollers for soil and surface compaction.',
      image: '/equipment/tractor-drawn-roller.jpg',
    },
    {
      id: 'shantui-26t',
      name: 'Shantui 26T Pneumatic Roller',
      category: 'roller',
      categoryLabel: 'Roller',
      description: 'Heavy pneumatic roller for road construction and asphalt compaction.',
      image: '/equipment/shantui-26tpneumatic-roller.jpg',
    },
    {
      id: 'shantui-19t',
      name: 'Shantui 19T Self Propelled Roller',
      category: 'roller',
      categoryLabel: 'Roller',
      description: 'Self-propelled roller for soil and asphalt compaction.',
      image: '/equipment/shantui-19t-roller.jpg',
    },
    {
      id: 'shantui-20t-pneumatic-roller',
      name: 'Shantui 20T Pneumatic Roller',
      category: 'roller',
      categoryLabel: 'Roller',
      description: 'Pneumatic roller designed for compaction and finishing work.',
      image: '/equipment/shantui-20t-roller.jpg',
    },
  
    // ---------------------------- TIPPERS ----------------------------------
    {
      id: 'bell-b25b',
      name: 'Bell B25B Dumper',
      category: 'tipper',
      categoryLabel: 'Tipper',
      description: 'Articulated dumper for transporting earth and bulk material across rough terrain.',
      image: '/equipment/bell-b25b-dumper.jpg',
    },
    {
      id: 'foden-15m3',
      name: '15m³ Foden Tipper',
      category: 'tipper',
      categoryLabel: 'Tipper',
      description: 'Heavy-duty tipper truck for transporting aggregates, sand and construction materials.',
      image: '/equipment/foden-tipper.jpg',
    },
    {
      id: 'ford-6610',
      name: 'Ford 6610 Tractor Dumper',
      category: 'tipper',
      categoryLabel: 'Tipper',
      description: 'Tractor dumper for hauling materials around construction and mining sites.',
      image: '/equipment/ford-6610-tractor.jpg',
    },
  
    // ---------------------------- WATER BOWSERS ----------------------------------
    {
      id: 'water-bowser-8000',
      name: '8,000L Water Bowser',
      category: 'waterbowser',
      categoryLabel: 'Water Bowser',
      description: 'Towable water bowser for dust suppression and water supply.',
      image: '/equipment/8000lwater-bowser.jpg',
    },
    {
      id: 'water-bowser-5000',
      name: '5,000L Water Bowser',
      category: 'waterbowser',
      categoryLabel: 'Water Bowser',
      description: 'Towable water bowser for construction sites and dust control.',
      image: '/equipment/5000lwater-bowser.jpg',
    },
    {
      id: 'water-truck-16000',
      name: '16,000L Water Bowser Truck',
      category: 'waterbowser',
      categoryLabel: 'Water Bowser',
      description: 'Large-capacity water truck for roadworks, mining and dust suppression.',
      image: '/equipment/16000lwater-bowser.jpg',
    },
  ]
  
  export function filterCatalog(categoryKey) {
    if (!categoryKey || categoryKey === 'all') return CATALOG
    return CATALOG.filter((item) => item.category === categoryKey)
  }