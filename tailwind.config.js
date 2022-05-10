/* eslint-disable no-undef */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Proxima Nova", "sans-serif"],
      serif: ["Prox", "serif"],
      mono: ["Menlo", "monospace"],
    },
    extend: {
      colors: {
        steelpink: {
          DEFAULT: "#DB28BC",
          50: "#F5C5ED",
          100: "#F2B4E8",
          200: "#ED91DD",
          300: "#E76ED2",
          400: "#E14BC7",
          500: "#DB28BC",
          600: "#AE1D95",
          700: "#7E156C",
          800: "#4E0D42",
          900: "#1E0519",
        },

        cornflower: {
          DEFAULT: "#5D86FF",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#D7E1FF",
          300: "#AFC3FF",
          400: "#86A4FF",
          500: "#5D86FF",
          600: "#255CFF",
          700: "#003CEC",
          800: "#002DB4",
          900: "#001F7C",
        },

        raisin: {
          DEFAULT: "#242537",
          50: "#8C8FB4",
          100: "#7D7FAA",
          200: "#616393",
          300: "#4C4E75",
          400: "#383A56",
          500: "#242537",
          600: "#1A1B28",
          700: "#101018",
          800: "#060609",
          900: "#000000",
        },

        ghostwhite: {
          DEFAULT: "#F3F4FF",
          500: "#F3F4FF",
          600: "#E4E6FF",
          700: "#D4D8FF",
          800: "#C5CAFF",
          900: "#B6BCFF",
        },
      },
    },
  },
  plugins: [],
};
