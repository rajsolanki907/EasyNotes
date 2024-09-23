/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //colours used in the project 
      colors: {
        primary: "#2B85FF",
        secondry: "EF863E",
      }

    },
  },
  plugins: [],
}

