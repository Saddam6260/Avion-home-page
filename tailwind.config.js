/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "390px",
      md: "769px",
      lg: "992px",
      xl: "1440px",
    },
    fontFamily: {
      clashi: "ClashDisplay-Regular",
      satoshi: "Satoshi-Regular",
    },
    colors: {
      lightGray: "#dee2e6",
      darkBlue: "#2A254B",
      white: "#fff",
      btnBg: "rgba(249, 249, 249, 0.15)",
      description: "#505977",
      purple: "#726E8D",
      black: "#000"
    },
    extend: {},
  },
  plugins: [],
};
