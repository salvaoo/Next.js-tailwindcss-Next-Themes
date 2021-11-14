module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      // fontFamily: {
      //   'caveat': ['Caveat', 'cursive'],
      //   'amaticSC' : ['"Amatic SC"', 'cursive'],
      // },
      screens: {
        "3xl": "2000px",
        "4xl": "3000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
