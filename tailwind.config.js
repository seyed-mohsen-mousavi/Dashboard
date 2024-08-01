// const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
    },
    fontFamily: {
      "peyda-thin": ["peyda-thin"],
      "peyda-light": ["peyda-light"],
      "peyda-mdeium": ["peyda-mdeium"],
      "peyda-black": ["peyda-black"],
    },
  },
  plugins: [],
};
