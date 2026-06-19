// -----------------------------------------------------------------------------
// Project track record, sourced from the ALTRAC company profile.
// -----------------------------------------------------------------------------

export const PROJECT_CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'roads', label: 'Roads' },
  { key: 'dams', label: 'Dams & Water' },
  { key: 'civils', label: 'Civils & Housing' },
  { key: 'mining', label: 'Mining & Earthmoving' },
]

export const PROJECTS = [
  // ------------------------------- ROADS ------------------------------------
  { name: 'Ruya – Mukumbura Road', client: 'Ministry of Transport', scope: 'Construction of roads', period: '2022 – present', category: 'roads' },
  { name: 'New Parliament Access Roads', client: 'Ministry of Transport — Mash West', scope: 'Building of roads', period: '2017 – present', category: 'roads' },
  { name: 'Harare – Masvingo Highway', client: 'Ministry of Transport', scope: 'Plant hire for highway construction', period: '2011 – 2012', category: 'roads' },
  { name: 'Chivhu – Nyazura', client: 'Ministry of Transport — Mash East', scope: 'Road, bridge & tollgate repairs', period: '2016', category: 'roads' },
  { name: 'Pure Gold, Mabvuku', client: 'Pure Gold', scope: 'Road construction', period: '2025', category: 'roads' },
  { name: 'Ngezi', client: 'Chacco', scope: 'Road construction', period: '2024', category: 'roads' },
  { name: 'Domboshava Road', client: 'Ministry of Transport', scope: 'Road reconstruction & repairs', period: '2012', category: 'roads' },
  { name: 'Mahuwe', client: 'Ministry of Transport — Mash Central', scope: 'Gravel road repair', period: '2017', category: 'roads' },
  { name: 'Mazoe Road', client: 'Ministry of Transport — Mash Central', scope: 'Gravel road repair & drain opening', period: '2017', category: 'roads' },
  { name: 'Nyaure Bridge', client: 'Ministry of Transport — Mash West', scope: 'Tarred road repair & reseal', period: '2017', category: 'roads' },
  { name: 'Victory Park', client: 'Kadoma City', scope: 'Road formation', period: '2016', category: 'roads' },
  { name: 'Zaoga University (Zhou)', client: 'Zada Construction', scope: 'Grading of gravel roads', period: '2016', category: 'roads' },
  { name: 'Driefontein Road', client: 'Chirumanzi RDC', scope: 'Construction of gravel road', period: '2004', category: 'roads' },
  { name: 'Muzarabani Roads', client: 'Muzarabani RDC', scope: 'Construction of roads', period: '2015', category: 'roads' },
  { name: 'Mbare', client: 'Netfuels', scope: 'Road repair & traffic islands', period: '2015 – 2016', category: 'roads' },

  // ---------------------------- DAMS & WATER --------------------------------
  { name: 'Jekwa Dam', client: 'Ministry of Water', scope: 'Construction of earth-fill dam', period: '2000 – 2001', category: 'dams' },
  { name: 'Makumbe Dam', client: 'Ministry of Water', scope: 'Construction of earth-fill dam', period: '2002', category: 'dams' },
  { name: 'Chidamoyo Dam', client: 'Hurungwe RDC', scope: 'Construction of earth-fill dam', period: '2002', category: 'dams' },
  { name: 'Pfunyaguwo Dam', client: 'Pfura RDC', scope: 'Construction of dam', period: '1999', category: 'dams' },
  { name: 'Nzvimbo Dam', client: 'Ministry of Water', scope: 'Construction of spillway', period: '1999', category: 'dams' },
  { name: 'Tokwe – Ngundu', client: 'ZINWA', scope: 'Land clearing & irrigation preparation', period: '2007 – 2008', category: 'dams' },

  // ------------------------- CIVILS & HOUSING -------------------------------
  { name: 'Kadoma Housing Development', client: 'Aluta Land Developers', scope: 'Roads & sewer for housing development', period: '2017 – present', category: 'civils' },
  { name: 'Goshen Housing, Budiriro', client: 'Goshen Consortium Housing Co-operative', scope: 'Roads for housing development', period: '2013 – present', category: 'civils' },
  { name: 'Nehanda Housing, Budiriro', client: 'Nehanda Housing Co-operative', scope: 'Roads for housing development', period: '2012', category: 'civils' },
  { name: 'Johane Masowe Housing, Budiriro', client: 'Johane Masowe Co-operative', scope: 'Roads for housing development', period: '2014', category: 'civils' },
  { name: 'Prospect Industrial Park', client: 'Prospect Industrial Park Syndicate', scope: 'Roads & storm-water drainage', period: '2012 – 2014', category: 'civils' },
  { name: 'Marimba Housing Estate', client: 'Marimba Consortium', scope: 'Roads for housing estate development', period: '2009', category: 'civils' },
  { name: 'Willowbank Intersection', client: 'Bathroom Boutique', scope: 'Car park & all civil works', period: '2014 – 2015', category: 'civils' },
  { name: 'Ezee Tiles', client: 'Ezee Tiles Zimbabwe', scope: 'Land clearing', period: '2025', category: 'civils' },

  // --------------------------- MINING & EARTHMOVING -------------------------
  { name: 'SLAMS Quarry', client: 'Bindura Nickel Corporation', scope: 'Mining & delivery of silica ore to the smelter', period: '1989 – 2008', category: 'mining' },
  { name: 'Bindura Nickel — Silica & Slag', client: 'Bindura Nickel Corporation', scope: 'Silica supply and movement of slag from the smelter', period: 'Recent', category: 'mining' },
  { name: 'Trojan Mine Stadium', client: 'Bindura Nickel Corporation', scope: 'Construction of stadium', period: '2006', category: 'mining' },
]

export function filterProjects(categoryKey) {
  if (!categoryKey || categoryKey === 'all') return PROJECTS
  return PROJECTS.filter((p) => p.category === categoryKey)
}
