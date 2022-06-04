module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: { light: "#EFEFEF" },
        primary: "#35A894",
        secondary: "#F7C381",
        lightGray: "#ECECEC",
        darkGray: "#707070",
      },
      fontFamily: {
        "vazir-base": ["vazir"],
        "vazir-bold": ["vazir-bold"],
        "vazir-black": ["vazir-black"],
      },
    },
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
