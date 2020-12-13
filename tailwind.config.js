module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        skin: {
          dark: "#DF9A80",
          light: "#FFF7F5",
          lightWithOpacity: "rgb(255,247,245,0.6)",
        },
      },
      screens: {
        smm: { max: "639px" },
        lgg: { max: "1023px" },
      },
      fontFamily: {
        navToggle: {
          montserrat: ["Montserrat", "sans-serif"],
        },
      },
      keyframes: {
        slide: {
          "0%": { width: "0%" },
          "100%": { width: "16rem" },
        },
      },
      animation: {
        slide: "slide 0.3s ease-out ",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
