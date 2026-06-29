import { Link } from 'react-router-dom'
import Logo from './Logo'
import WhatsAppButton from './WhatsAppButton'
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from './icons'
import { CONTACT, SITE, telLink, mailLink, waGreeting } from '../lib/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-black text-white">
      {/* hazard-stripe top accent */}
      <div className="h-1.5 w-full bg-hazard-stripes" />

      <div className="section grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Logo onDark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Chiswell Investments (Pvt) Ltd t/a ALTRAC — reliable earthmoving equipment
            rental and civil works across Harare and Zimbabwe since 1996.
          </p>
          <div className="mt-5">
            <WhatsAppButton message={`${waGreeting} I'd like to make an enquiry.`}>
              Message Us
            </WhatsAppButton>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><Link to="/" className="hover:text-brand-yellow">Home</Link></li>
            <li><Link to="/vehicles" className="hover:text-brand-yellow">Vehicles &amp; Equipment</Link></li>
            <li><Link to="/projects" className="hover:text-brand-yellow">Projects</Link></li>
            <li><Link to="/about" className="hover:text-brand-yellow">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-yellow">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
            Get In Touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 shrink-0 text-brand-yellow" />
              <span>
                <a href={telLink} className="hover:text-brand-yellow">{CONTACT.phoneDisplay}</a>
                {' · '}
                <a href={`tel:+${CONTACT.phone2Digits}`} className="hover:text-brand-yellow">
                  {CONTACT.phoneDisplay2}
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon className="h-5 w-5 shrink-0 text-brand-yellow" />
              <a href={mailLink} className="hover:text-brand-yellow">{CONTACT.email}</a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
            Opening Hours
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {CONTACT.hours.map((h) => (
              <li key={h.days} className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                <span>
                  <span className="block font-semibold text-white/85">{h.days}</span>
                  <span>{h.time}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <p>© {year} {SITE.name}. All rights reserved. </p>
          <p>Website designed and developed by BitLab Media.</p>
        </div>
      </div>
    </footer>
  )
}
