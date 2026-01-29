/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // Move this outside of 'theme' and use 'themes'
  daisyui: {
    themes: ["dark"], 
  },
}