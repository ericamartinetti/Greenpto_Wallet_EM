/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],  
  theme: {
        extend: {
          colors:{
            primary: "#f8b127",
            secondary: "#fffdfa",
            accent: "#0D4937",
            tertiary: "#198766"          
          },    
        },
  },
  plugins: [],
}

