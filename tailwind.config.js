/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultConfig');


module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, 
    important: true,
    // or 'media' or 'class'
  theme: {
   ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "#7dd3fc",
      white: '#ffffff',
      text: {
       DEFAULT: "#1F2937",
        light: "#6C7281",
      },
      light: {
        DEFAULT: "#FAFBFC",
        lighter: "#F3F4F6",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}