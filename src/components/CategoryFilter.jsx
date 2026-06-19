import { CATEGORIES } from '../data/equipment'

/**
 * Pill-style category filter buttons.
 *  - active:   currently selected category key
 *  - onChange: callback(key) when a button is clicked
 */
export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2.5">
      {CATEGORIES.map((cat) => {
        const isActive = active === cat.key
        return (
          <button
            key={cat.key}
            type="button"
            onClick={() => onChange(cat.key)}
            aria-pressed={isActive}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 active:scale-95 ${
              isActive
                ? 'bg-brand-blue text-white shadow-card'
                : 'bg-white text-brand-gray ring-1 ring-brand-steel hover:ring-brand-blue hover:text-brand-black'
            }`}
          >
            {cat.label}
          </button>
        )
      })}
    </div>
  )
}
