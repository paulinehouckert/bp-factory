module.exports = {
  content: [
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./layout/*.liquid",
    "./templates/*.liquid",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      light: "rgba(255, 255, 255, 0.7)",
      dark: "#3B3B3B",
      "gray-1": "#3C3C3C",
      "gray-2": "#898989",
      "gray-3": "#6E6E6D",
      "neutral-1": "#E5E5E3",
      "neutral-2": "#E5E5E5",
    },
    fontFamily: {
      theme: ["Montserrat", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "3rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
