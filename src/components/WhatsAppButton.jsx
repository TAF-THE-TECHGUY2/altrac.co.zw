import { waLink } from '../lib/site'
import { WhatsAppIcon } from './icons'

/**
 * WhatsApp call-to-action button (opens a pre-filled chat in a new tab).
 *
 * Props:
 *  - message:  pre-filled WhatsApp message
 *  - children: button label (defaults to "Chat on WhatsApp")
 *  - className: extra classes to merge/override
 *  - full:     stretch to full width
 */
export default function WhatsAppButton({
  message,
  children = 'Chat on WhatsApp',
  className = '',
  full = false,
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${full ? 'w-full' : ''} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span>{children}</span>
    </a>
  )
}
