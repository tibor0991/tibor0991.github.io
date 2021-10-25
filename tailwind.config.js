const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'header': ['Atkinson Hyperlegible', 'sans-serif']
    },
    extend: { 
      typography: {
        'white' : {
          css: {
            color: colors.white,
            h1: {
              color: colors.white,
            },
            h2: {
              color: colors.white,
            },
            p: {
              color: colors.white,
            }

          }
        }
      }
    },
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
  plugins: [ 
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ],
}

