/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        lato: ['Lato', 'Montserrat'],
        // foldit: ['Foldit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

