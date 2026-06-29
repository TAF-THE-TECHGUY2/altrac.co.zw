import { useState } from 'react'
import { CATALOG_CATEGORIES, filterCatalog } from '../data/catalog'
import { useCart } from '../context/CartContext'
import { CheckIcon } from './icons'
import ReservationModal from './ReservationModal'

export default function EquipmentCatalog() {
  const [category, setCategory] = useState('all')
  const [reserveItem, setReserveItem] = useState(null)
  const list = filterCatalog(category)

  return (
    <section id="catalog" className="scroll-mt-24 bg-brand-black text-white">
      <div className="section py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-brand-blue">Equipment Catalog</p>
          <h2 className="text-3xl font-black sm:text-4xl">Browse Our Fleet</h2>
          <p className="mt-3 text-white/60">
            Filter by category, add machines to your enquiry, or reserve a unit instantly.
          </p>
        </div>

        {/* Filter pills */}
        <div className="mt-9 flex flex-wrap justify-center gap-2.5">
          {CATALOG_CATEGORIES.map((cat) => {
            const isActive = category === cat.key
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setCategory(cat.key)}
                aria-pressed={isActive}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 active:scale-95 ${
                  isActive
                    ? 'bg-white text-brand-black shadow-card'
                    : 'border border-white/30 text-white hover:border-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Card grid — full width, no gaps, fades on filter change */}
      <div
        key={category}
        className="grid animate-fade-in grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {list.map((item) => (
          <CatalogCard key={item.id} item={item} onReserve={() => setReserveItem(item)} />
        ))}
      </div>

      {reserveItem && (
        <ReservationModal item={reserveItem} onClose={() => setReserveItem(null)} />
      )}
    </section>
  )
}

function CatalogCard({ item, onReserve }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(item)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <article className="group relative h-[500px] overflow-hidden">
      {/* full-bleed image (scales on hover) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        style={{ backgroundImage: `url(${item.image})` }}
        role="img"
        aria-label={item.name}
      />

      {/* dark gradient overlay at the bottom */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}
      />

      {/* category badge */}
      <span className="absolute left-6 top-6 rounded-full bg-[#2563eb] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow">
        {item.categoryLabel}
      </span>

      {/* content pinned bottom-left */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-2xl font-bold leading-tight text-white">{item.name}</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/90">
          {item.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleAdd}
            className={`inline-flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-2.5 text-sm font-bold transition-all active:scale-95 ${
              added
                ? 'border-[#25D366] bg-[#25D366] text-white'
                : 'border-white text-white hover:bg-white hover:text-brand-black'
            }`}
          >
            {added ? (
              <>
                <CheckIcon className="h-4 w-4" /> Added
              </>
            ) : (
              'Add to Cart'
            )}
          </button>
          <button
            type="button"
            onClick={onReserve}
            className="inline-flex items-center justify-center rounded-lg bg-[#2563eb] px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#1d4ed8] active:scale-95"
          >
            Reserve Now
          </button>
        </div>
      </div>
    </article>
  )
}
