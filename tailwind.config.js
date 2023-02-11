/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      maindark: "#152e4d",
      darker: "#12263f",
      light: "#edf2f9",
    },
    boxShadow: {
      "dark-morfism": "5px 5px 10px #0b1827, -5px -5px 10px #173657;",
      "light-morfism": "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;",
    },
    extend: {},
  },
  plugins: [],
};
