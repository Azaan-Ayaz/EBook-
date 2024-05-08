/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custom1:"#64006E",
        custom2: "#C20077"
      },
      fontFamily:{
        poppins:["Poppins",'sans-serif']
      }
    },
  },
  plugins: [],
}

