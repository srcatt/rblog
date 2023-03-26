/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding:{
        'default': 'var(--margin)'
      },
      margin:{
        'default': 'var(--margin)',
        'default-half': 'calc(var(--margin) / 2)'
      },
      lineHeight:{
        'compact': '0.8'
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-cubic': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      }
    },
  },
  plugins: [],
}
