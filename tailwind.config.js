/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      ytred: "#ff0000",
      blackGray: "#282828",
      blackie: "#070515",
      darkb: "#0f0c25",
      whitish: "#f3f5f7",
      trueWhite: "#ffffff",
      ytGray: "#d9d9d9",
    },
    screens: {
      xs: "280px",
      three: "350px",
      five: "500px",
      tablet: "640px",
      ltab: "780px",
      xtab: "960px",
      ltop: "1050px",
      desktop: "1280px",
      lg: "1440px",
      xl: "1600px",
    },
  },
  plugins: [],
};
