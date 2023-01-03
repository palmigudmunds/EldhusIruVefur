/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#D44244"
      }
    },
    fontFamily: {
      sans: ['"IBM Plex Sans"', 'sans-serif']
    }
  },
  plugins: [],
}
