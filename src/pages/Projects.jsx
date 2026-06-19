import { useState } from 'react'
import PageHero from '../components/PageHero'
import WhatsAppButton from '../components/WhatsAppButton'
import { FinalCTA } from './Home'
import { PROJECT_CATEGORIES, filterProjects, PROJECTS } from '../data/projects'

const HIGHLIGHTS = [
  { value: '5', label: 'Dams & spillways built' },
  { value: '25+', label: 'Road projects delivered' },
  { value: 'Gov’t', label: 'Trusted by ministries' },
  { value: '1989', label: 'Earliest project on record' },
]

export default function Projects() {
  const [category, setCategory] = useState('all')
  const list = filterProjects(category)

  return (
    <>
      <PageHero
        eyebrow="Track Record"
        title="Projects We've Delivered"
        subtitle="From national highways and earth-fill dams to housing estates and mine works — a snapshot of the projects ALTRAC has completed across Zimbabwe."
      />

      {/* Highlights */}
      <section className="bg-brand-blue">
        <div className="section grid grid-cols-2 gap-6 py-12 lg:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="text-center text-white">
              <p className="text-3xl font-black sm:text-4xl">{h.value}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-white/75">
                {h.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Filter + list */}
      <section className="bg-white">
        <div className="section py-14 sm:py-16">
          <div className="flex flex-wrap justify-center gap-2.5">
            {PROJECT_CATEGORIES.map((cat) => {
              const isActive = category === cat.key
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setCategory(cat.key)}
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

          <p className="mt-6 text-center text-sm font-semibold text-brand-gray-light">
            {list.length} of {PROJECTS.length} projects
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <article
                key={`${p.name}-${p.period}`}
                className="flex flex-col rounded-2xl border border-brand-steel bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-brand-yellow px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide text-brand-black">
                    {PROJECT_CATEGORIES.find((c) => c.key === p.category)?.label}
                  </span>
                  <span className="text-xs font-semibold text-brand-gray-light">{p.period}</span>
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-brand-black">{p.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-blue">{p.client}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-gray-light">{p.scope}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative note */}
      <section className="bg-brand-steel/40">
        <div className="section flex flex-col items-center justify-between gap-6 py-10 text-center md:flex-row md:text-left">
          <p className="max-w-3xl text-brand-gray">
            We've also completed roads at Wedza–Sadza, Beatrice Road, Mutawatawa, Gypsum,
            Olivine and the Sugar Refinery, plus infrastructural development at Willowbank
            Industrial Park, Marimba, Westwood and the Airport Casino.
          </p>
          <WhatsAppButton
            message="Hi ALTRAC, I'd like to discuss a project. Here are the details: "
            className="shrink-0"
          >
            Discuss Your Project
          </WhatsAppButton>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
