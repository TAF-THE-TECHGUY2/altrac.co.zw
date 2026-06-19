// -----------------------------------------------------------------------------
// Central site configuration.
// Update business details, contact info and WhatsApp number here in ONE place.
// -----------------------------------------------------------------------------

export const SITE = {
  name: 'ALTRAC',
  legalName: 'Chiswell Investments (Pvt) Ltd',
  tradeName: 'ALTRAC',
  tagline: 'Masters of Machinery',
  regNo: '3683/96',
  founded: 'May 1996',
}

export const CONTACT = {
  // Display version (with spaces / +)
  phoneDisplay: '+263 712 205 147',
  phoneDisplay2: '+263 773 615 620',
  // Digits only — used to build wa.me + tel: links (primary number)
  whatsappNumber: '263712205147',
  phone2Digits: '263773615620',
  email: 'afourie@mweb.co.zw',
  email2: 'mail@chiswell-investments.com',
  website: 'www.chiswell-investments.com',
  address: '1 Cheviot Road / 1st Avenue, Waterfalls, Harare',
  // Used for the Google Maps embed/link
  mapQuery: 'Cheviot Road, Waterfalls, Harare, Zimbabwe',
  hours: [
    { days: 'Monday – Thursday', time: '7:30 – 17:00' },
    { days: 'Friday', time: '7:30 – 16:00' },
    { days: 'Saturday – Sunday', time: 'Closed' },
  ],
}

/**
 * Build a WhatsApp click-to-chat link with a pre-filled message.
 * @param {string} [message] Optional message to pre-populate.
 */
export function waLink(message) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/** Standard greeting prefix for WhatsApp messages. */
export const waGreeting = `Hi ${SITE.name},`

/** Build a tel: link from the primary phone number. */
export const telLink = `tel:+${CONTACT.whatsappNumber}`
export const telLink2 = `tel:+${CONTACT.phone2Digits}`

/** Build a mailto: link. */
export const mailLink = `mailto:${CONTACT.email}`
