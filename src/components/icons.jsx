// Lightweight inline SVG icons — no external icon library needed.
// Each accepts a `className` so size/colour are controlled with Tailwind.

const base = (className) => ({
  className,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  xmlns: 'http://www.w3.org/2000/svg',
})

export function WhatsAppIcon({ className = 'h-5 w-5' }) {
  // WhatsApp glyph (filled)
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02ZM12.05 20.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  )
}

export function PhoneIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base(className)}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

export function MailIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base(className)}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  )
}

export function MapPinIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base(className)}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function ClockIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

export function CheckIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base(className)}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function ArrowRightIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base(className)}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export function SearchIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base(className)}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

export function CartIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base(className)}>
      <circle cx="9" cy="21" r="1.5" />
      <circle cx="18" cy="21" r="1.5" />
      <path d="M2.5 3h2l2.2 12.4a1.5 1.5 0 0 0 1.5 1.2h8.3a1.5 1.5 0 0 0 1.5-1.2L21 7H6" />
    </svg>
  )
}

export function MenuIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base(className)}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export function CloseIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base(className)}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

export function ShieldIcon({ className = 'h-7 w-7' }) {
  return (
    <svg {...base(className)}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function TruckIcon({ className = 'h-7 w-7' }) {
  return (
    <svg {...base(className)}>
      <path d="M10 17h4V5H2v12h3" />
      <path d="M14 9h4l3 3v5h-2" />
      <path d="M9 17h6" />
      <circle cx="7.5" cy="17.5" r="2" />
      <circle cx="17.5" cy="17.5" r="2" />
    </svg>
  )
}

export function HeadsetIcon({ className = 'h-7 w-7' }) {
  return (
    <svg {...base(className)}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2Z" />
      <path d="M20 14a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2Z" />
      <path d="M17 18v1a3 3 0 0 1-3 3h-2" />
    </svg>
  )
}

// --- Equipment category icon (used in placeholder image tiles) ---
export function ExcavatorIcon({ className = 'h-12 w-12' }) {
  return (
    <svg {...base(className)}>
      <path d="M3 21h18" />
      <path d="M5 21v-4h6v4" />
      <rect x="5" y="11" width="6" height="6" rx="1" />
      <path d="M11 13l4-5 5 2" />
      <path d="m20 10-1 4" />
      <circle cx="6.5" cy="20" r="0.5" />
    </svg>
  )
}

export function GraderIcon({ className = 'h-12 w-12' }) {
  return (
    <svg {...base(className)}>
      <path d="M2 20h20" />
      <path d="M4 16h10l4-3h3" />
      <path d="M7 13l8-3" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  )
}

export function LoaderIcon({ className = 'h-12 w-12' }) {
  return (
    <svg {...base(className)}>
      <path d="M2 20h20" />
      <path d="M3 17v-4h7v4" />
      <path d="M10 14l5 1 4-5" />
      <path d="M19 6v4" />
      <circle cx="6.5" cy="18" r="1.5" />
      <circle cx="15" cy="18" r="1.5" />
    </svg>
  )
}

export function DozerIcon({ className = 'h-12 w-12' }) {
  return (
    <svg {...base(className)}>
      <path d="M2 17h2l1-4h7v4" />
      <path d="M12 13l6 1 3 2v1h-9" />
      <path d="M2 17l-0.5 2.5h20" />
      <circle cx="6" cy="19" r="1" />
      <circle cx="10" cy="19" r="1" />
      <circle cx="14" cy="19" r="1" />
      <path d="M21 9v8" />
    </svg>
  )
}

export function RollerIcon({ className = 'h-12 w-12' }) {
  return (
    <svg {...base(className)}>
      <path d="M3 20h18" />
      <circle cx="7" cy="15" r="4" />
      <path d="M11 12h6l3 2v3h-9" />
      <path d="M14 12V9h4" />
    </svg>
  )
}

export function CategoryGlyph({ category, className }) {
  switch (category) {
    case 'graders':
      return <GraderIcon className={className} />
    case 'tippers':
      return <TruckIcon className={className} />
    case 'loaders':
      return <LoaderIcon className={className} />
    case 'dozers':
      return <DozerIcon className={className} />
    case 'compactors':
      return <RollerIcon className={className} />
    case 'excavators':
    default:
      return <ExcavatorIcon className={className} />
  }
}
