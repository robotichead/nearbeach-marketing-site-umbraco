/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{css,sass}",
    "./Views/**/*.cshtml",
    "./Views/Partials/Compositions/*.cshtml"
  ],
  theme: {
    extend: {
      fontFamily: {
        'lexend-deca': ['"Lexend Deca"', 'sans-serif'],
        'pacifico': ['"Pacifico"', 'cursive'],
        'raleway-dots': ['"Raleway Dots"', 'cursive'],
      }
    },
  },
  plugins: [],
}