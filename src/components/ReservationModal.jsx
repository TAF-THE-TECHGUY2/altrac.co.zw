import { useState, useEffect } from 'react'
import { CloseIcon } from './icons'
import { waLink, waGreeting } from '../lib/site'

/**
 * Reservation modal — collects Name, Phone, Email, Start/End dates and sends
 * the booking request through WhatsApp (consistent with the rest of the site).
 */
export default function ReservationModal({ item, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', start: '', end: '' })

  // Close on Escape + lock background scroll while open.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const lines = [
      `${waGreeting} I'd like to reserve the ${item?.name}.`,
      form.name && `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.start && `Start date: ${form.start}`,
      form.end && `End date: ${form.end}`,
    ].filter(Boolean)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Reserve ${item?.name}`}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      {/* dialog */}
      <div className="relative w-full max-w-md animate-fade-up rounded-2xl border border-white/10 bg-brand-ink p-6 text-white shadow-2xl sm:p-7">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-md p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <p className="eyebrow mb-1 text-brand-blue">Reserve Equipment</p>
        <h3 className="text-xl font-extrabold">{item?.name}</h3>
        {item?.categoryLabel && (
          <p className="text-sm text-white/55">{item.categoryLabel}</p>
        )}

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <Field label="Name" name="name" value={form.name} onChange={update} required placeholder="Your name" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={update} required placeholder="+263 …" />
            <Field label="Email" name="email" type="email" value={form.email} onChange={update} placeholder="you@email.com" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Start Date" name="start" type="date" value={form.start} onChange={update} required />
            <Field label="End Date" name="end" type="date" value={form.end} onChange={update} required />
          </div>

          <button
            type="submit"
            className="mt-1 w-full rounded-lg bg-[#2563eb] px-6 py-3 font-bold text-white shadow-card transition-all hover:bg-[#1d4ed8] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2563eb]/40 active:scale-[0.98]"
          >
            Submit Reservation
          </button>
          <p className="text-center text-xs text-white/45">
            Submitting opens WhatsApp with your reservation details ready to send.
          </p>
        </form>
      </div>
    </div>
  )
}

function Field({ label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label htmlFor={`res-${name}`} className="mb-1.5 block text-sm font-semibold text-white/85">
        {label}
        {required && <span className="text-brand-blue"> *</span>}
      </label>
      <input
        id={`res-${name}`}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{ colorScheme: 'dark' }}
        className="w-full rounded-lg border border-white/15 bg-brand-black px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
      />
    </div>
  )
}
