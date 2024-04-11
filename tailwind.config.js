/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#264653',
        persianGreen: '#2A9D8F',
        safron: '#E9C46A',
        sandyBrown: '#F4A261',
        burntSienna: '#E76F51',
        slateGray: '#758CA1'
      },
      fontFamily: {
        josefinSans: ['Josefin Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
