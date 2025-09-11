/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ["Unbounded", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        brand: "#FFA900", // now you can use bg-brand, text-brand etc.
      }
    },
  },
  plugins: [],
}
