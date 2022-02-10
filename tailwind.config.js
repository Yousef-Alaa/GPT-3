const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: false,
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    container: {
      center: true,
      padding: '0.5rem'
    },
    screens: {
      // Extra Small
      'xs': '410px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: '#81AFDD',
        second: '#FF8A71',
        orange: '#FF4820'
      },
      screens: {
        // Small
        'sm': '576px',
      }
    },
  },
  plugins: [],
}
