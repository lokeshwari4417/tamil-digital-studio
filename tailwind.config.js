/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488', // Primary Teal/Emerald Accent
          700: '#0F766E', // Deep Brand Accent
          800: '#115E59',
          900: '#134E4A',
          950: '#042F2C',
        },
        accent: {
          gold: '#F59E0B',
          amber: '#D97706',
          coral: '#F97316',
        },
        surface: {
          light: '#F8FAFC',
          card: '#FFFFFF',
          dark: '#0F172A',
          muted: '#F1F5F9',
        },
        charcoal: {
          DEFAULT: '#1E293B',
          dark: '#0F172A',
          light: '#475569',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(15, 23, 42, 0.05)',
        'soft': '0 10px 30px -5px rgba(15, 23, 42, 0.06), 0 4px 12px -2px rgba(15, 23, 42, 0.03)',
        'soft-lg': '0 20px 40px -15px rgba(15, 118, 110, 0.12), 0 10px 20px -5px rgba(15, 23, 42, 0.04)',
        'glow': '0 0 25px rgba(13, 148, 136, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
