/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");





const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "banner-bg":"url('/src/assets/img/banner-bg.png')",
        "banner-bg2":"url('/src/assets/img/color-sharp2.png')"
        
      }
    },
    fontFamily:{
      akash:[ "Dancing Script", "Reddit Mono"]
    }
  },
  plugins: [Myclass],
}
