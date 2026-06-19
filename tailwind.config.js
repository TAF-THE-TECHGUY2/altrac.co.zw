/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core industrial brand palette: yellow, black, white, grey
        brand: {
          // Official ALTRAC palette
          blue: '#0D7BEA',        // Corporate Blue — main brand, buttons, links
          'blue-dark': '#0A5FB8',
          yellow: '#F7E600',      // Safety Yellow — highlights, CTAs, icons
          'yellow-dark': '#D4C600',
          black: '#111111',       // text, navigation, headings
          ink: '#1C1C20',         // dark surface (slightly lighter than black)
          gray: '#3A3D42',        // mid grey
          'gray-light': '#6B7280',
          steel: '#E6E8EC',       // light grey surface
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        // Subtle hazard-stripe accent used as an industrial design motif
        'hazard-stripes':
          'repeating-linear-gradient(45deg, #F7E600 0, #F7E600 18px, #111111 18px, #111111 36px)',
      },
      boxShadow: {
        card: '0 4px 24px -8px rgba(15, 15, 16, 0.25)',
        'card-hover': '0 16px 40px -12px rgba(15, 15, 16, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.4s ease-out both',
        'slide-in': 'slide-in 0.3s ease-out both',
      },
    },
  },
  plugins: [],
}
