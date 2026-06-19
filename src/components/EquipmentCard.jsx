import EquipmentImage from './EquipmentImage'
import { WhatsAppIcon } from './icons'
import { waLink, waGreeting } from '../lib/site'

export default function EquipmentCard({ item }) {
  const message = `${waGreeting} I'd like to enquire about renting the ${item.name}. Is it available?`

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-brand-steel bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full">
        <EquipmentImage
          src={item.image}
          name={item.name}
          category={item.category}
          className="h-full w-full"
        />
        <span className="absolute right-3 top-3 z-10 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-black shadow">
          {item.categoryLabel}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-extrabold text-brand-black">{item.name}</h3>

        {item.specs?.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {item.specs.map((spec) => (
              <li
                key={spec}
                className="rounded-md bg-brand-steel px-2 py-0.5 text-[11px] font-semibold text-brand-gray"
              >
                {spec}
              </li>
            ))}
          </ul>
        )}

        <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-gray-light">
          {item.description}
        </p>

        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-5 w-full"
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </article>
  )
}
