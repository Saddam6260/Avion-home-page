/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      orange: "#80ed99",
      bgblack: "#031333",
    },
    extend: {
      fontFamily: {
        lato: ["lato"],
        inter: ["Inter"],
        poppins: ["Poppins"],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
