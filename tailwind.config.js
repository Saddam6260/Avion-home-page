/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        orange: "#F54C1E",
        bgblack: "#031333",
      },
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
