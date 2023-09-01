/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.html',
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      // ---------------------------------
      'main-black': 'rgba(0, 0, 0, 0.90)',
      'default-black': '#000000',
      'light-black': '#5E5D5C',
      'light-black-2': 'rgba(26, 26, 26, 0.70)',
      'light-black-3': 'rgba(0, 0, 0, 0.40)',
      'blue': '#5278DA',
      'blue-light': '#203D8A',
    },

    container: {
      padding: '20px',
      center: true
    },
    extend: {}
  },
  plugins: [],
}

