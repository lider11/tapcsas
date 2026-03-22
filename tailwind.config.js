/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          900: '#064e3b',
        },
        secondary: {
          600: '#2563eb',
          700: '#1d4ed8',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          500: '#64748b',
          700: '#334155',
          900: '#0f172a',
        },
      },
      boxShadow: {
        soft: '0 6px 20px rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        md: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
      },
      fontSize: {
        display: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
}
