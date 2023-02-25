/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "simple-black": "#0c0c0c",
        "simple-black-2": "#171717",
        "simple-blue": "#0a2725",
      },
      fontFamily: {
        sans: ['var(--font-Inter)'],
        alerta: ['var(--font-Alerta)']
      }
    },
  },
  plugins: [],
}