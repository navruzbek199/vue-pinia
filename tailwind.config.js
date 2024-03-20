/** @type {import('tailwindcss').Config} */
export default {
  
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors:{
        primary: {
          DEFAULT: "#51267d",
          300: "#f1eff4",
          500: "#6941c6",
          600: "#7F56D9",
          700: "#6941C6",
        },
      }
    },
  },
  plugins: [],
}

