// Selected project records in ALTRAC COMPANY PROFILE - July 2026.docx.
// Null client/period fields are not specified in the profile; do not infer them.
export const PROJECT_CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'roads', label: 'Roads & Transport Infrastructure' },
  { key: 'civils', label: 'Urban & Industrial Development' },
  { key: 'dams', label: 'Dams, Water & Irrigation' },
  { key: 'mining', label: 'Mining Support' },
]

export const PROJECTS = [
  { name: 'Ruya–Mukumbura Road', client: 'Ministry of Transport', scope: 'Road construction', period: '2022–2024', category: 'roads', featured: true },
  { name: 'Kadoma Housing Development', client: 'Aluta Land Developers', scope: 'Roads and sewer infrastructure', period: '2017–current', category: 'civils', featured: true },
  { name: 'Pure Gold, Mabvuku', client: null, scope: 'Road construction', period: '2025', category: 'roads' },
  { name: 'Ngezi', client: 'Chacco', scope: 'Road construction', period: '2024', category: 'roads' },
  { name: 'Prospect Industrial Park', client: null, scope: 'Roads and stormwater drainage for industrial development', period: null, category: 'civils' },
  { name: 'Ezee Tiles Zimbabwe', client: null, scope: 'Land clearing', period: '2025', category: 'civils' },
  { name: 'Nyaure Bridge', client: 'Ministry of Transport', scope: 'Resealing and tarred-road repairs', period: '2017', category: 'roads' },
  { name: 'Chivhu–Nyazura', client: 'Ministry of Transport', scope: 'Road, bridge and tollgate repairs', period: '2016', category: 'roads' },
  { name: 'Jekwa, Chidamoyo & Makumbe Dams', client: null, scope: 'Earth-fill dam and related construction works', period: '2000–2002', category: 'dams', featured: true },
  { name: 'Willowbank', client: 'Bathroom Boutique', scope: 'Car park and associated civil works', period: '2014–2015', category: 'civils' },
  { name: 'Tokwe–Ngundu', client: 'ZINWA', scope: 'Land clearing and irrigation preparation', period: '2007–2008', category: 'dams' },
  { name: 'Bindura Nickel Corporation', client: null, scope: 'Silica-ore mining and delivery to the Bindura smelter', period: '1989–2008', category: 'mining', featured: true },
]

export const PROJECT_SECTORS = [
  { key: 'roads', title: 'Roads & Transport Infrastructure', text: 'Construction, upgrading, rehabilitation, resealing, drainage and plant support.' },
  { key: 'civils', title: 'Urban & Industrial Development', text: 'Roads, reticulation, stormwater systems, parking areas and civil works.' },
  { key: 'dams', title: 'Dams, Water & Irrigation', text: 'Earth dams, spillways, land clearing, water-management and irrigation preparation.' },
  { key: 'mining', title: 'Mining Support', text: 'Bulk earthworks, access and haul roads, site preparation and civil-infrastructure support.' },
]

export function filterProjects(categoryKey) {
  if (!categoryKey || categoryKey === 'all') return PROJECTS
  return PROJECTS.filter(project => project.category === categoryKey)
}
