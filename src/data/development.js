// Confirmed price and sold register supplied by the client.
// Caluta and USD pricing confirmed by the client; location and payment terms pending.
export const SOLD_STANDS = {
  Chiswell: [7806,8128,8136,5165,8137,8138,8130,5160,5154,7863,5157,7811,5163,5153,5162,7801,5168,5169,7862,8125,5095,5170,5171,5173,7860,7810,5172,7823,5155,7827,5158,7865,7986,7788,8129,5181,5164,7822,7805,7868,5161,5159,7786,5182,5183,5184,5156,5166,5152,5177,7826,7991,7866,7807,7809],
  Advocate: [8133,8131,8132],
}
export function getStandStatus(value) {
  const number = String(value).trim()
  if (!/^\d{4}$/.test(number)) return null
  const group = Object.entries(SOLD_STANDS).find(([, stands]) => stands.includes(Number(number)))?.[0]
  return { number, sold: Boolean(group), group: group || null }
}
export const DEVELOPMENT = {
  name: 'Caluta',
  planName: 'Railway Farm 8',
  location: null,
  description: 'A place for your next chapter.',
  standSize: null,
  pricePerSquareMetre: 35,
  priceIncludesVAT: true,
  currencySymbol: 'US$',
  paymentTerms: null,
  amenities: [],
  gallery: [],
  layoutPlan: '/developments/railway-farm-plan.jpg',
  layoutPdf: '/developments/railway-farm-plan.pdf',
  drawingReference: 'CIV/B/01/2017',
  drawingDate: 'February 2017',
}

export const DEVELOPMENT_RATE = `${DEVELOPMENT.currencySymbol}${DEVELOPMENT.pricePerSquareMetre}`
