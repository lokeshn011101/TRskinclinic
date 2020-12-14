module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        skin: {
          dark: "#DF9A80",
          medium: "#E39F85",
          light: "#FFF7F5",
          lightWithOpacity: "rgb(255,247,245,0.6)",
        },
        footer: {
          bluei: "#14A59F",
        },
      },
      screens: {
        smm: { max: "640px" },
        lgg: { max: "1023px" },
        mdd: { max: "1022px" },
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
