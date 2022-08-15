const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.jsx',
    './src/components/**.jsx',
    './src/layouts/**.jsx',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      ...colors,
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'primary': '#BB86FC',
      'gold': '#edc285',
      'orange': '#ffa126',
    },
  },
}
