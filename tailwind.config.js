/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#2B1810",
        "ink-soft": "#5b4232",
        coral: "#E07856",
        "coral-soft": "#f3a98e",
        musgo: "#2F5A47",
        mel: "#C8924A",
        "card-bg": "#FFFCF7",
      },
      fontFamily: {
        display: ["DM Serif Display", "serif"],
        hand: ["Caveat", "cursive"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
