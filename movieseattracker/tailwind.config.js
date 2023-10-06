/** @type {import('tailwindcss').Config} */
module.exports = {
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
}

