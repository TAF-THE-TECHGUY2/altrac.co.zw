// Compact dark page header used at the top of inner pages.
export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-brand-black text-white">
      {/* faint diagonal texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #F7E600 0, #F7E600 2px, transparent 2px, transparent 22px)',
        }}
      />
      <div className="h-1.5 w-full bg-hazard-stripes" />
      <div className="section relative py-14 sm:py-20">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h1 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
