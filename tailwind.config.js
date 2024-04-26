/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        BG_image: "url('/public/BG.png')",
      },
      colors: {
        black_rgba: 'rgba(0, 0, 0, 0.54)',
      },
    },
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