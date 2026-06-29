import { Link } from 'react-router-dom'


export default function Logo({
  onClick,
  className = '',
}) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={`flex items-center ${className}`}
      aria-label="ALTRAC Home"
    >
      <img
        src="/logo.png"
        alt="ALTRAC"
        className="h-16 w-auto transition-transform duration-300 hover:scale-105"
      />
    </Link>
  )
}