import PageHero from '../components/PageHero'
import { FinalCTA } from './Home'
import { CheckIcon, ShieldIcon } from '../components/icons'
import { SITE } from '../lib/site'
import {
  PROFILE,
  STATS,
  VALUES,
  SERVICES,
  CLIENTELE,
  DEPARTMENTS,
  TEAM,
  CERTIFICATIONS,
  MEMBERSHIPS,
  REFERENCES,
  SUPPLIERS,
} from '../data/company'

const FACTS = [
  { label: 'Registered name', value: SITE.legalName },
  { label: 'Trading as', value: 'ALTRAC' },
  { label: 'Registration no.', value: SITE.regNo },
  { label: 'Established', value: SITE.founded },
  { label: 'Grading', value: 'CE/A (highest)' },
  { label: 'Memberships', value: MEMBERSHIPS.join(' · ') },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Masters of Machinery since 1996"
        subtitle={PROFILE.intro}
      />

      {/* Story + key facts */}
      <section className="bg-white">
        <div className="section grid items-start gap-12 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Who We Are</p>
            <h2 className="text-3xl font-black text-brand-black sm:text-4xl">
              A proven name in civil &amp; earthmoving works
            </h2>
            <div className="mt-5 space-y-4 text-brand-gray-light">
              {PROFILE.story.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Facts card */}
          <div className="rounded-3xl border border-brand-steel bg-brand-black p-8 text-white shadow-card">
            <h3 className="text-xl font-black">
              Company <span className="text-brand-yellow">at a glance</span>
            </h3>
            <dl className="mt-6 divide-y divide-white/10">
              {FACTS.map((f) => (
                <div key={f.label} className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-sm text-white/60">{f.label}</dt>
                  <dd className="text-right text-sm font-bold text-white">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-blue">
        <div className="section grid grid-cols-2 gap-6 py-12 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center text-white">
              <p className="text-3xl font-black sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-white/75">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white">
        <div className="section grid gap-6 py-16 sm:py-20 md:grid-cols-2">
          {[
            { tag: 'Our Vision', text: PROFILE.vision },
            { tag: 'Our Mission', text: PROFILE.mission },
          ].map((card) => (
            <div
              key={card.tag}
              className="relative overflow-hidden rounded-2xl border border-brand-steel bg-brand-steel/40 p-8"
            >
              <div className="absolute left-0 top-0 h-full w-1.5 bg-brand-yellow" />
              <p className="eyebrow mb-3">{card.tag}</p>
              <p className="text-lg font-semibold leading-relaxed text-brand-black">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-steel/40">
        <div className="section py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Our Values</p>
            <h2 className="text-3xl font-black text-brand-black sm:text-4xl">What we stand for</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ title, text }) => (
              <div key={title} className="rounded-2xl border border-brand-steel bg-white p-6 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow text-brand-black">
                  <ShieldIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-brand-black">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray-light">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services + Clientele */}
      <section className="bg-white">
        <div className="section grid gap-12 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">What We Do</p>
            <h2 className="text-3xl font-black text-brand-black sm:text-4xl">Services we offer</h2>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm font-medium text-brand-black">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3">Who We Serve</p>
            <h2 className="text-3xl font-black text-brand-black sm:text-4xl">Our clientele</h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {CLIENTELE.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-brand-steel px-4 py-2 text-sm font-semibold text-brand-black"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-8 text-sm font-bold uppercase tracking-widest text-brand-gray-light">
              Operating departments
            </p>
            <ul className="mt-3 space-y-2">
              {DEPARTMENTS.map((d) => (
                <li key={d} className="flex items-center gap-2.5 text-sm font-medium text-brand-black">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-brand-black text-white">
        <div className="section py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Our Team</p>
            <h2 className="text-3xl font-black sm:text-4xl">Experienced people behind the plant</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <div key={member.name} className="rounded-2xl border border-white/10 bg-brand-ink p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow text-lg font-black text-brand-black">
                  {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </div>
                <h3 className="mt-4 text-lg font-extrabold">{member.name}</h3>
                <p className="text-sm font-semibold text-brand-yellow">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white">
        <div className="section py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Accreditation</p>
            <h2 className="text-3xl font-black text-brand-black sm:text-4xl">
              Certified, compliant &amp; credible
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="flex items-start gap-4 rounded-2xl border border-brand-steel bg-white p-6 shadow-card"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-blue text-white">
                  <CheckIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-brand-black">{cert.name}</h3>
                  <p className="mt-1 text-sm text-brand-gray-light">{cert.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section className="bg-brand-steel/40">
        <div className="section py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">References</p>
            <h2 className="text-3xl font-black text-brand-black sm:text-4xl">What clients say</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {REFERENCES.map((ref) => (
              <figure
                key={ref.by}
                className="flex flex-col rounded-2xl border border-brand-steel bg-white p-7 shadow-card"
              >
                <span className="font-serif text-5xl leading-none text-brand-yellow">“</span>
                <blockquote className="-mt-3 flex-1 text-sm leading-relaxed text-brand-gray">
                  {ref.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-brand-steel pt-4">
                  <p className="text-sm font-extrabold text-brand-black">{ref.by}</p>
                  <p className="text-xs text-brand-gray-light">{ref.org}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Suppliers */}
      <section className="bg-white">
        <div className="section py-14">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-brand-gray-light">
            Trusted suppliers &amp; partners
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {SUPPLIERS.map((s) => (
              <span
                key={s}
                className="rounded-lg border border-brand-steel px-4 py-2 text-sm font-semibold text-brand-gray"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
