module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'header': ['Atkinson Hyperlegible', 'sans-serif']
    },
    extend: { },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
      backgroundColor: ['hover', 'active'],
      textColor: ['active']
    },
  },
  plugins: [ require('@tailwindcss/aspect-ratio')],
}
