import { Link } from 'react-router-dom'
import EquipmentCatalog from '../components/EquipmentCatalog'
import WhatsAppButton from '../components/WhatsAppButton'
import { STATS, SERVICES } from '../data/company'
import { PROJECTS } from '../data/projects'
import { waGreeting } from '../lib/site'
import {
  ArrowRightIcon,
  ShieldIcon,
  TruckIcon,
  HeadsetIcon,
  CheckIcon,
} from '../components/icons'

const GUARANTEES = [
  {
    icon: ShieldIcon,
    title: 'Reliable Machines',
    text: 'Our fleet is serviced and inspected in our own fully-equipped workshop by qualified mechanics, so equipment arrives site-ready and keeps working.',
  },
  {
    icon: TruckIcon,
    title: 'On-Time Delivery',
    text: 'We know downtime costs money. Machines are dispatched and delivered when you need them — fast, so your project stays on schedule.',
  },
  {
    icon: HeadsetIcon,
    title: 'Professional Support',
    text: 'Experienced operators and a responsive team are a WhatsApp message away to keep your job moving from start to finish.',
  },
]

const FEATURED_PROJECTS = PROJECTS.filter((p) =>
  ['Harare – Masvingo Highway', 'Jekwa Dam', 'New Parliament Access Roads', 'SLAMS Quarry'].includes(
    p.name,
  ),
)

export default function Home() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section
        className="relative flex min-h-[86vh] items-center bg-brand-black text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,17,17,0.80), rgba(17,17,17,0.55)), url('/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute left-0 top-0 h-1.5 w-full bg-hazard-stripes" />
        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-hazard-stripes" />

        <div className="section relative py-20">
          <div className="max-w-3xl animate-fade-up">
            <p className="eyebrow mb-4 text-brand-yellow">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-yellow" />
              Road &amp; dam Construction · Plant Hire · Earthmoving Equipment
              <span className="inline-block h-2 w-2 rounded-full bg-brand-yellow" />
            </p>
            <h1 className="text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl">
              Construction &amp; Earthmoving Solutions {' '}
              {/*Earthmoving Equipment Rental in{' '}*/}
              <span className="text-brand-blue">Across Zimbabwe</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
              Delivering dependable equipment, skilled operators, and project support for
              infrastructure, mining, commercial and civil works.
              {/* Get the machines you need, when you need them — fast, affordable, and
              professional. */}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#catalog" className="btn-accent text-base">
                Browse Fleet
                <ArrowRightIcon className="h-5 w-5" />
              </a>
              {/*<WhatsAppButton
                message={`${waGreeting} I'd like to enquire about hiring equipment.`}
                className="text-base"
              >
                Enquire on WhatsApp
              </WhatsAppButton> */}
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-white/70">
              {['Serviced & site-ready fleet', ' Experienced operators', 'Fast local delivery'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-brand-yellow" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== CREDENTIALS STRIP ====================== */}
      <section className="bg-brand-blue">
        <div className="section grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center text-white">
              <p className="text-2xl font-black sm:text-3xl">{s.value}</p>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-white/75">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

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
              </div>
            </section>

      {/* ===================== EQUIPMENT CATALOG ====================== */}
      <EquipmentCatalog />

      {/* ================ NOT SURE WHICH EQUIPMENT? ==================== */}
      <section className="bg-brand-yellow">
        <div className="section flex flex-col items-center justify-between gap-6 py-10 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black text-brand-black sm:text-3xl">
              Not Sure Which Equipment You Need?
            </h2>
            <p className="mt-2 text-brand-black/75">
              Tell us about your project and our team will recommend the right machine for
              the job — and get you a quick quote.
            </p>
          </div>
          <WhatsAppButton
            message={`${waGreeting} I'm not sure which equipment I need. Here's my project: `}
            className="shrink-0 bg-brand-black text-white hover:bg-brand-ink focus-visible:ring-brand-black/30"
          >
            Ask Us on WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      {/* ===================== OUR GUARANTEE =========================== */}
      <section className="bg-brand-steel/40">
        <div className="section py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-3">Our Guarantee</p>
            <h2 className="text-3xl font-black text-brand-black sm:text-4xl">
              Built On Trust &amp; Reliability
            </h2>
            <p className="mt-3 text-brand-gray-light">
              We keep your project moving with dependable machines and a team that delivers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {GUARANTEES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-brand-steel bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="absolute right-0 top-0 h-1 w-full bg-hazard-stripes opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-yellow text-brand-black">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-brand-black">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray-light">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURED PROJECTS ====================== */}
      <section className="bg-brand-black text-white">
        <div className="section py-16 sm:py-20">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-3 text-brand-yellow">Track Record</p>
              <h2 className="text-3xl font-black sm:text-4xl">Trusted on major projects</h2>
            </div>
            <Link to="/projects" className="btn-outline">
              View All Projects
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PROJECTS.map((p) => (
              <div key={p.name} className="rounded-2xl border border-white/10 bg-brand-ink p-6">
                <span className="text-xs font-semibold text-brand-yellow">{p.period}</span>
                <h3 className="mt-2 text-lg font-extrabold">{p.name}</h3>
                <p className="mt-1 text-sm text-white/55">{p.client}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{p.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== FINAL CTA ============================ */}
      <FinalCTA />
    </>
  )
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-blue text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #F7E600 0, #F7E600 2px, transparent 2px, transparent 24px)',
        }}
      />
      <div className="section relative py-16 text-center sm:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
          Ready to Reserve Your Equipment?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Send us a message and we'll confirm availability, pricing and delivery — fast.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppButton
            message={`${waGreeting} I'd like to reserve equipment. Here are my details: `}
            className="text-base"
          >
            Reserve on WhatsApp
          </WhatsAppButton>
          <Link to="/contact" className="btn-accent text-base">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
