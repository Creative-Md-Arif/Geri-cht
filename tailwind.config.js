/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    fontFamily:{
      primary:[ "Cormorant Garamond", "serif"],
      secondary:["Cormorant Upright","sans-serif"],
      opensans: ["Open Sans", "sans-serif"]
    }
  },
  plugins: [],
}