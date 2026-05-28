/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#080808',
        brandRed: '#ff0000',
        brandDarkRed: '#800000',
        accentGlow: 'rgba(255, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
