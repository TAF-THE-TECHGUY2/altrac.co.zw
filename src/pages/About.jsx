import PageHero from '../components/PageHero'
import { FinalCTA } from './Home'
import { CheckIcon, ShieldIcon } from '../components/icons'
import { SITE } from '../lib/site'
import {
  PROFILE,
  STATS,
  VALUES,
  SERVICE_DETAILS,
  MINING_CAPABILITIES,
  CLIENTELE,
  DEPARTMENTS,
  TEAM,
  SUPPORTING_DOCUMENTS,
  MEMBERSHIPS,
} from '../data/company'

const FACTS = [
  { label: 'Registered name', value: SITE.legalName },
  { label: 'Trading as', value: 'ALTRAC' },
  { label: 'Registration no.', value: SITE.regNo },
  { label: 'Established', value: SITE.founded },
  { label: 'Permanent employees', value: '43, including management and artisans' },
  { label: 'Memberships', value: MEMBERSHIPS.join(' · ') },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Civil Engineering, Infrastructure & Mining Support"
        subtitle={PROFILE.intro}
      />

      {/* Story + key facts */}
      <section className="bg-white">
        <div className="section grid items-start gap-12 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Who We Are</p>
            <h2 className="text-3xl font-black text-brand-black sm:text-4xl">
              Engineering dependable infrastructure since 1996
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
            <div key={s.value} className="text-center text-white">
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
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            <h2 className="text-3xl font-black text-brand-black sm:text-4xl">Services &amp; capabilities</h2>
            <div className="mt-6 space-y-5">
              {SERVICE_DETAILS.map(service => (
                <div key={service.title}>
                  <h3 className="flex items-center gap-2.5 text-base font-bold text-brand-black">
                    <CheckIcon className="h-5 w-5 shrink-0 text-brand-blue" />
                    {service.title}
                  </h3>
                  <p className="mt-1 pl-7 text-sm leading-relaxed text-brand-gray-light">{service.text}</p>
                </div>
              ))}
            </div>
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

      {/* Mining-support capabilities from the July 2026 profile. */}
      <section className="bg-brand-steel/40">
        <div className="section py-16 sm:py-20">
          <p className="eyebrow mb-3">Mining Support</p>
          <h2 className="text-3xl font-black text-brand-black sm:text-4xl">Mining-support capabilities</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {MINING_CAPABILITIES.map(capability => (
              <li key={capability} className="flex items-start gap-3 text-sm text-brand-black">
                <CheckIcon className="h-5 w-5 shrink-0 text-brand-blue" />
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Both directors and the management team use the profile’s full biographies. */}
      <section className="bg-brand-black text-white">
        <div className="section py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-3">Leadership</p>
            <h2 className="text-3xl font-black sm:text-4xl">Our directors &amp; management</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65">{PROFILE.leadershipIntro}</p>
          </div>
          {[
            { title: 'Directors', members: TEAM.filter(member => member.role.endsWith('Director')) },
            { title: 'Management', members: TEAM.filter(member => !member.role.endsWith('Director')) },
          ].map(group => (
            <div key={group.title} className="mt-10">
              <h3 className="text-xl font-bold text-white">{group.title}</h3>
              <div className="mt-5 grid gap-6 lg:grid-cols-2">
                {group.members.map(member => (
                  <article key={member.name} className="rounded-2xl border border-white/10 bg-brand-ink p-6 sm:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow text-lg font-black text-brand-black" aria-hidden="true">
                      {member.name.replace(/^Pr\. Eng\. /, '').split(' ').map(name => name[0]).slice(0, 2).join('')}
                    </div>
                    <h4 className="mt-4 text-lg font-extrabold">{member.name}</h4>
                    <p className="text-sm font-semibold text-brand-yellow">{member.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/75">{member.bio}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Supporting documents described in the profile. */}
      <section className="bg-white">
        <div className="section py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Supporting Documents</p>
            <h2 className="text-3xl font-black text-brand-black sm:text-4xl">
              Registrations &amp; supporting documents
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-brand-gray-light">Current supporting documents should accompany tender and prequalification submissions as applicable.</p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SUPPORTING_DOCUMENTS.map((cert) => (
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

      <FinalCTA />
    </>
  )
}
