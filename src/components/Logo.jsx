import { Link } from 'react-router-dom'

const BLUE = '#0D7BEA'
const YELLOW = '#F7E600'

/**
 * ALTRAC brand mark — a 3D open-box / trough with a yellow end face.
 * Recreated as vector art so it stays crisp at any size and works on
 * light or dark backgrounds.
 *
 * To swap in the official artwork later, drop the file into /public
 * (e.g. /logo.png) and replace <AltracMark /> + the wordmark below with
 * <img src="/logo.png" alt="ALTRAC" />.
 */
export function AltracMark({ className = 'h-10 w-auto' }) {
  return (
    <svg
      viewBox="0 0 256 150"
      className={className}
      role="img"
      aria-label="ALTRAC"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* yellow near end-face */}
      <polygon points="52,56 104,74 74,122" fill={YELLOW} />
      {/* blue 3D outline */}
      <g fill="none" stroke={BLUE} strokeWidth="7" strokeLinejoin="round" strokeLinecap="round">
        <path d="M52 56 L104 74 L74 122 Z" />
        <path d="M180 22 L232 40 L202 88 Z" />
        <path d="M52 56 L180 22" />
        <path d="M104 74 L232 40" />
        <path d="M74 122 L202 88" />
      </g>
      {/* registered mark */}
      <circle cx="240" cy="15" r="9" fill={YELLOW} />
      <text
        x="240"
        y="19"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill={BLUE}
        fontFamily="Inter, Arial, sans-serif"
      >
        R
      </text>
    </svg>
  )
}

/**
 * Full logo lock-up: ALTRAC wordmark + "Masters of Machinery" + the mark.
 *
 * Props:
 *  - onDark:       set true on dark backgrounds (lightens the subtitle)
 *  - showSubtitle: toggle the "Masters of Machinery" line
 *  - markClass:    size classes for the mark
 */
export default function Logo({
  onClick,
  onDark = false,
  showSubtitle = true,
  className = '',
  markClass = 'h-9 w-auto sm:h-10',
}) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="ALTRAC — home"
    >
      <span className="flex flex-col leading-none">
        <span
          className="text-2xl font-black italic tracking-tight text-brand-blue sm:text-3xl"
          style={{ letterSpacing: '0.02em' }}
        >
          ALTRAC
        </span>
        {showSubtitle && (
          <span
            className={`mt-1 text-[7px] font-bold uppercase tracking-[0.22em] sm:text-[9px] ${
              onDark ? 'text-white/75' : 'text-brand-black'
            }`}
          >
            Masters of Machinery
          </span>
        )}
      </span>
      <AltracMark className={markClass} />
    </Link>
  )
}
