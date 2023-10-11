/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "390px",
      md: "769px",
      lg: "992",
      xl: "1440",
    },
    fontFamily: {
      clashi: "ClashDisplay-Regular",
      satoshi: "Satoshi-Regular",
    },
    colors: {
      lightGray: "#F9F9F9",
      darkBlue: "#2A254B",
    },
    extend: {},
  },
  plugins: [],
};
