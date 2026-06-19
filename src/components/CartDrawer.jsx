import { useCart } from '../context/CartContext'
import { CloseIcon, CartIcon, WhatsAppIcon } from './icons'
import { waLink, waGreeting } from '../lib/site'

/**
 * Slide-over enquiry cart. Lists the equipment the visitor has added and lets
 * them send the whole list as a WhatsApp enquiry.
 */
export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, clearCart, count } = useCart()

  const message = [
    `${waGreeting} I'd like to enquire about hiring the following equipment:`,
    ...items.map((i) => `• ${i.name}${i.qty > 1 ? ` ×${i.qty}` : ''}`),
  ].join('\n')

  return (
    <>
      {/* backdrop */}
      <div
        onClick={closeCart}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Enquiry cart"
        className={`fixed right-0 top-0 z-[65] flex h-full w-full max-w-sm flex-col bg-brand-ink text-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <CartIcon className="h-6 w-6 text-brand-yellow" />
            <h2 className="text-lg font-extrabold">
              Your Enquiry{count > 0 && <span className="text-brand-yellow"> ({count})</span>}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="rounded-md p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {/* body */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-white/50">
              <CartIcon className="h-12 w-12 text-white/25" />
              <p className="mt-3 font-semibold text-white/70">Your enquiry list is empty</p>
              <p className="mt-1 text-sm">Add equipment from the catalog to build a quote.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-brand-black p-3"
                >
                  <div className="min-w-0">
                    <p className="truncate font-semibold">{item.name}</p>
                    <p className="text-xs text-white/50">
                      {item.categoryLabel}
                      {item.qty > 1 && ` · Qty ${item.qty}`}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                    className="shrink-0 rounded-md p-1.5 text-white/50 hover:bg-white/10 hover:text-white"
                  >
                    <CloseIcon className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* footer */}
        {items.length > 0 && (
          <div className="space-y-3 border-t border-white/10 px-5 py-4">
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Send Enquiry on WhatsApp
            </a>
            <button
              type="button"
              onClick={clearCart}
              className="w-full rounded-lg border border-white/20 px-4 py-2.5 text-sm font-semibold text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              Clear list
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
