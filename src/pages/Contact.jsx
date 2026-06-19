import { useState } from 'react'
import PageHero from '../components/PageHero'
import WhatsAppButton from '../components/WhatsAppButton'
import { CATEGORIES } from '../data/equipment'
import { CONTACT, telLink, mailLink, waLink, waGreeting } from '../lib/site'
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  WhatsAppIcon,
} from '../components/icons'

const CONTACT_CARDS = [
  {
    icon: MapPinIcon,
    title: 'Visit Us',
    lines: [CONTACT.address],
    href: `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}`,
    external: true,
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    lines: [CONTACT.phoneDisplay, CONTACT.phoneDisplay2],
    href: telLink,
  },
  {
    icon: MailIcon,
    title: 'Email Us',
    lines: [CONTACT.email, CONTACT.email2],
    href: mailLink,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', equipment: '', message: '' })

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const lines = [
      `${waGreeting} I would like to make an enquiry.`,
      form.name && `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.equipment && `Equipment: ${form.equipment}`,
      form.message && `Details: ${form.message}`,
    ].filter(Boolean)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Get Your Project Moving"
        subtitle="Reach out for availability, pricing and delivery. The fastest way to get a quote is a quick WhatsApp message."
      />

      {/* Contact cards */}
      <section className="bg-white">
        <div className="section py-14 sm:py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {CONTACT_CARDS.map(({ icon: Icon, title, lines, href, external }) => (
              <a
                key={title}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex flex-col items-start rounded-2xl border border-brand-steel bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow text-brand-black">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-brand-black">{title}</h3>
                {lines.map((line) => (
                  <p
                    key={line}
                    className="mt-1 text-sm font-medium text-brand-gray-light group-hover:text-brand-black"
                  >
                    {line}
                  </p>
                ))}
              </a>
            ))}
          </div>

          {/* Hours + WhatsApp */}
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-brand-steel bg-brand-steel/40 p-7 md:col-span-2">
              <div className="flex items-center gap-3">
                <ClockIcon className="h-6 w-6 text-brand-blue" />
                <h3 className="text-lg font-extrabold text-brand-black">Opening Hours</h3>
              </div>
              <dl className="mt-4 divide-y divide-brand-steel">
                {CONTACT.hours.map((h) => (
                  <div key={h.days} className="flex items-center justify-between py-2.5">
                    <dt className="text-sm font-semibold text-brand-black">{h.days}</dt>
                    <dd className="text-sm text-brand-gray-light">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-brand-black p-7 text-center text-white">
              <WhatsAppIcon className="mx-auto h-9 w-9 text-[#25D366]" />
              <h3 className="mt-3 text-lg font-extrabold">Chat With Us Now</h3>
              <p className="mt-1 text-sm text-white/65">Get a fast response on WhatsApp.</p>
              <div className="mt-4">
                <WhatsAppButton
                  full
                  message={`${waGreeting} I'd like to make an enquiry.`}
                >
                  Open WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="bg-brand-steel/40">
        <div className="section grid gap-10 py-16 sm:py-20 lg:grid-cols-2">
          {/* Form */}
          <div>
            <p className="eyebrow mb-3">Send an Enquiry</p>
            <h2 className="text-3xl font-black text-brand-black">
              Tell us what you need
            </h2>
            <p className="mt-2 text-brand-gray-light">
              Fill in the form and we'll open WhatsApp with your details ready to send.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="John Moyo"
                  required
                />
                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update}
                  placeholder="+263 ..."
                />
              </div>

              <div>
                <label htmlFor="equipment" className="mb-1.5 block text-sm font-bold text-brand-black">
                  Equipment Needed
                </label>
                <select
                  id="equipment"
                  name="equipment"
                  value={form.equipment}
                  onChange={update}
                  className="w-full rounded-lg border border-brand-steel bg-white px-4 py-3 text-sm text-brand-black focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/40"
                >
                  <option value="">Select a category…</option>
                  {CATEGORIES.filter((c) => c.key !== 'all').map((c) => (
                    <option key={c.key} value={c.label}>
                      {c.label}
                    </option>
                  ))}
                  <option value="Not sure / Other">Not sure / Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-brand-black">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={update}
                  placeholder="Tell us about your project, location and hire dates…"
                  className="w-full resize-none rounded-lg border border-brand-steel bg-white px-4 py-3 text-sm text-brand-black focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/40"
                />
              </div>

              <button type="submit" className="btn-whatsapp w-full text-base">
                <WhatsAppIcon className="h-5 w-5" />
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Map */}
          <div>
            <p className="eyebrow mb-3">Find Us</p>
            <h2 className="text-3xl font-black text-brand-black">Our Location</h2>
            <p className="mt-2 text-brand-gray-light">{CONTACT.address}</p>
            <div className="mt-5 overflow-hidden rounded-2xl border border-brand-steel shadow-card">
              <iframe
                title="ALTRAC location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&output=embed`}
                className="h-[360px] w-full lg:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-bold text-brand-black">
        {label}
        {required && <span className="text-brand-blue"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-brand-steel bg-white px-4 py-3 text-sm text-brand-black placeholder:text-brand-gray-light/60 focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/40"
      />
    </div>
  )
}
