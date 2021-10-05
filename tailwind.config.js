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
      fontWeight: ['hover', 'group-hover'],
      backgroundColor: ['hover', 'active'],
      textColor: ['active', 'group-hover'],
      borderWidth: ['hover', 'group-hover'],
      ringWidth: ['hover','group-hover'],
      blur: ['group-hover'],
      saturate: ['group-hover']
    },
  },
  plugins: [ require('@tailwindcss/aspect-ratio')],
}
