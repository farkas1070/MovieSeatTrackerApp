const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
   
  ],
  theme: {
    extend: {
      height: {
        '60': '15rem', // Add your custom height value here
      },
    },
  },
  plugins: [],
})

