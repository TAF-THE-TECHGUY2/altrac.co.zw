import { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import { SearchIcon, CartIcon, MenuIcon, CloseIcon, PhoneIcon } from './icons'
import { CONTACT, telLink } from '../lib/site'
import { useCart } from '../context/CartContext'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/vehicles', label: 'Vehicles' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [term, setTerm] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const { count, openCart } = useCart()

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleSearch = (e) => {
    e.preventDefault()
    const q = term.trim()
    navigate(q ? `/vehicles?q=${encodeURIComponent(q)}` : '/vehicles')
    setOpen(false)
  }

  // Reusable search field (used on desktop centre + mobile row).
  const SearchForm = ({ className = '' }) => (
    <form onSubmit={handleSearch} className={`flex w-full ${className}`} role="search">
      <input
        type="search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search vehicle..."
        aria-label="Search vehicles"
        className="w-full rounded-l-md border-0 bg-white px-4 py-2.5 text-sm text-brand-black placeholder:text-brand-gray-light focus:outline-none focus:ring-2 focus:ring-brand-blue/60"
      />
      <button
        type="submit"
        aria-label="Search"
        className="flex shrink-0 items-center justify-center rounded-r-md bg-brand-ink px-4 text-white ring-1 ring-white/15 transition-colors hover:bg-brand-blue"
      >
        <SearchIcon className="h-5 w-5" />
      </button>
    </form>
  )

  const linkClass = ({ isActive }) =>
    `relative px-1 py-1 text-[15px] font-semibold transition-colors ${
      isActive ? 'text-brand-yellow' : 'text-white/85 hover:text-white'
    } after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-brand-yellow after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-black text-white shadow-md">
      {/* ------------------------- TOP BAR ------------------------- */}
      <div className="section flex h-20 items-center gap-4">
        <Logo onDark className="shrink-0" />

        {/* Centred search (desktop) */}
        <div className="hidden flex-1 justify-center px-4 md:flex">
          <SearchForm className="max-w-2xl" />
        </div>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <button
            type="button"
            onClick={openCart}
            aria-label={`Enquiry cart${count ? ` (${count})` : ''}`}
            title="Your enquiry cart"
            className="relative rounded-md p-2 text-white transition-colors hover:text-brand-yellow"
          >
            <CartIcon className="h-7 w-7" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-brand-yellow px-1 text-[11px] font-black text-brand-black">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile search row */}
      <div className="border-t border-white/10 px-5 py-3 sm:px-8 md:hidden">
        <SearchForm />
      </div>

      {/* ----------------- SECOND BAR: NAV LINKS (desktop) ----------------- */}
      <nav className="hidden border-t border-white/10 md:block">
        <div className="section flex h-12 items-center justify-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* ----------------- MOBILE MENU ----------------- */}
      <div
        className={`md:hidden overflow-hidden border-t border-white/10 bg-brand-ink transition-[max-height] duration-300 ease-in-out ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="section flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `rounded-lg px-3 py-3 text-base font-semibold transition-colors ${
                  isActive ? 'bg-white/10 text-brand-yellow' : 'text-white/85 hover:bg-white/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a href={telLink} className="btn-primary mt-3 w-full">
            <PhoneIcon className="h-5 w-5" />
            <span>Call Us — {CONTACT.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  )
}
