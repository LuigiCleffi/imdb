/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", 
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
}

