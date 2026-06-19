import { useState } from 'react'
import { CategoryGlyph } from './icons'

/**
 * Equipment photo with a graceful branded placeholder fallback.
 *
 * If `src` is missing OR the image file fails to load, a styled placeholder
 * (hazard-stripe header + category icon + name) is rendered instead. This means
 * you can drop real photos into /public/equipment/ at any time and they will
 * simply appear — no code changes required.
 */
export default function EquipmentImage({ src, alt, category, name, className = '' }) {
  const [failed, setFailed] = useState(false)
  const showImage = src && !failed

  return (
    <div className={`relative overflow-hidden bg-brand-ink ${className}`}>
      {showImage ? (
        <img
          src={src}
          alt={alt || name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <Placeholder category={category} name={name} />
      )}
    </div>
  )
}

function Placeholder({ category, name }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-brand-gray to-brand-black p-6 text-center">
      {/* hazard-stripe accent strip */}
      <div className="absolute left-0 top-0 h-1.5 w-full bg-hazard-stripes opacity-90" />
      <div className="mb-3 rounded-2xl bg-brand-yellow/15 p-4 ring-1 ring-brand-yellow/30">
        <CategoryGlyph category={category} className="h-12 w-12 text-brand-yellow" />
      </div>
      <p className="text-sm font-bold text-white/90">{name}</p>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-white/40">
        Photo coming soon
      </p>
    </div>
  )
}
