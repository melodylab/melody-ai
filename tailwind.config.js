/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // Paleta Melody — café / beige / ámbar
        cream:   '#F5F0E8',
        beige:   '#EDE3D5',
        sand:    '#D9BFA3',
        coffee: {
          light: '#8B6F5E',
          DEFAULT: '#3B2E2A',
          dark:  '#231B19',
        },
        amber: {
          melody: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'warm-sm': '0 1px 3px 0 rgba(59,46,42,0.08), 0 1px 2px -1px rgba(59,46,42,0.06)',
        'warm-md': '0 4px 16px -2px rgba(59,46,42,0.12), 0 2px 4px -2px rgba(59,46,42,0.08)',
        'warm-lg': '0 12px 40px -4px rgba(59,46,42,0.16), 0 4px 8px -4px rgba(59,46,42,0.10)',
        'warm-xl': '0 20px 60px -8px rgba(59,46,42,0.20), 0 8px 16px -8px rgba(59,46,42,0.12)',
      },
    },
  },
  plugins: [],
}
