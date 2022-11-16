/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultConfig');


module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: true, 
    important: true,
    // or 'media' or 'class'
  theme: {
   ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "#757575",
      //primary: "#334155",
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