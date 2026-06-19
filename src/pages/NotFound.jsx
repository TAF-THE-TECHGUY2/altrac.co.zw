import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../components/icons'

export default function NotFound() {
  return (
    <section className="bg-brand-black text-white">
      <div className="h-1.5 w-full bg-hazard-stripes" />
      <div className="section flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-7xl font-black text-brand-yellow sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-extrabold sm:text-3xl">Page Not Found</h1>
        <p className="mt-3 max-w-md text-white/65">
          The page you're looking for has been moved or doesn't exist. Let's get you back on
          track.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Back to Home
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
