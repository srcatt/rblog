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
    },
  },
  plugins: [],
}
