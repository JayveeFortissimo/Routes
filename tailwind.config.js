/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight:{
        'section':'80vh'
      },
      lineHeight:{
        'lines':'12rem'
      },
      screens:{
        'xs':'360px'
      },
      backgroundColor:{
        'button':'#ffd803'
      },
      maxWidth:{
        'about':'70rem'
      }
    },
  },
  plugins: [],
}

