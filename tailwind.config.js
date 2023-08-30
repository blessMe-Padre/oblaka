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
      'default-black': '#78dcca',
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

