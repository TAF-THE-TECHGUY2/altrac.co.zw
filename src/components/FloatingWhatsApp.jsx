import { waLink, waGreeting } from '../lib/site'
import { WhatsAppIcon } from './icons'

// Persistent floating WhatsApp action button (bottom-right on every page).
export default function FloatingWhatsApp() {
  const message = `${waGreeting} I'd like to enquire about equipment rental.`
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-[#25D366]/25 transition-transform hover:scale-110 active:scale-95"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
    </a>
  )
}
