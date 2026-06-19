import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CategoryFilter from '../components/CategoryFilter'
import EquipmentCard from '../components/EquipmentCard'
import WhatsAppButton from '../components/WhatsAppButton'
import { filterEquipment, searchEquipment, CATEGORIES, FLEET_SCHEDULE } from '../data/equipment'
import { CloseIcon } from '../components/icons'

const TOTAL_UNITS = FLEET_SCHEDULE.reduce((sum, row) => sum + row.qty, 0)

export default function Vehicles() {
  const [category, setCategory] = useState('all')
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const list = searchEquipment(filterEquipment(category), query)
  const activeLabel = CATEGORIES.find((c) => c.key === category)?.label ?? 'All'

  const clearSearch = () => {
    searchParams.delete('q')
    setSearchParams(searchParams, { replace: true })
  }

  return (
    <>
      <PageHero
        eyebrow="Vehicles & Equipment"
        title="Our Earthmoving Fleet"
        subtitle="Excavators, graders, tippers and loaders — serviced, site-ready and available for hire across Harare and Zimbabwe."
      />

      <section className="bg-white">
        <div className="section py-12 sm:py-16">
          <CategoryFilter active={category} onChange={setCategory} />

          {/* Active search chip */}
          {query && (
            <div className="mt-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-semibold text-brand-blue-dark">
                Search: “{query}”
                <button
                  type="button"
                  onClick={clearSearch}
                  aria-label="Clear search"
                  className="rounded-full p-0.5 hover:bg-brand-blue/20"
                >
                  <CloseIcon className="h-4 w-4" />
                </button>
              </span>
            </div>
          )}

          <p className="mt-6 text-center text-sm font-semibold text-brand-gray-light">
            Showing {list.length} {list.length === 1 ? 'machine' : 'machines'}
            {category !== 'all' && (
              <>
                {' '}in <span className="text-brand-black">{activeLabel}</span>
              </>
            )}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((item) => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>

          {list.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-brand-gray-light">
                No equipment matches{query ? ` “${query}”` : ' this category'} yet.
              </p>
              {query && (
                <button onClick={clearSearch} className="btn-dark mt-5">
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Full plant schedule */}
      <section className="bg-brand-steel/40">
        <div className="section py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Full Plant Schedule</p>
            <h2 className="text-3xl font-black text-brand-black sm:text-4xl">
              {TOTAL_UNITS} machines owned by ALTRAC
            </h2>
            <p className="mt-3 text-brand-gray-light">
              The complete fleet of plant and equipment we own and maintain in-house.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-brand-steel bg-white shadow-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-black text-white">
                <tr>
                  <th className="w-20 px-5 py-3 font-bold uppercase tracking-wide">Qty</th>
                  <th className="px-5 py-3 font-bold uppercase tracking-wide">Equipment</th>
                  <th className="px-5 py-3 font-bold uppercase tracking-wide">Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-steel">
                {FLEET_SCHEDULE.map((row, i) => (
                  <tr key={`${row.model}-${i}`} className="hover:bg-brand-steel/30">
                    <td className="px-5 py-3">
                      <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-brand-yellow px-2 font-black text-brand-black">
                        {row.qty}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-semibold text-brand-black">{row.name}</td>
                    <td className="px-5 py-3 text-brand-gray-light">{row.model}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-brand-gray-light">
            Plus a fully-equipped workshop and qualified mechanics for in-house service &amp; maintenance.
          </p>
        </div>
      </section>

      {/* Help band */}
      <section className="bg-brand-yellow">
        <div className="section flex flex-col items-center justify-between gap-6 py-10 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black text-brand-black sm:text-3xl">
              Can't Find What You're Looking For?
            </h2>
            <p className="mt-2 text-brand-black/75">
              We have more machines available. Message us with your project details and
              we'll sort you out.
            </p>
          </div>
          <WhatsAppButton
            message="Hi ALTRAC, I'm looking for specific equipment. Can you help?"
            className="shrink-0 bg-brand-black text-white hover:bg-brand-ink focus-visible:ring-brand-black/30"
          >
            Ask Us on WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </>
  )
}
