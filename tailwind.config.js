/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      serif: ["Spectral Regular"],
    },
    colors: {
      "light-purple": "#ac7ff4",
      "dark-purple": "#713fc2",
      darkest: "#000511",
      dark: "#001c3b",
      mid: "#00386c",
      light: "#0057a1",
      highlight: "#117fda",
      "dark-text": "#ffff",
      "light-text": "#0000",
    },
    extend: {
      fontFamily: {
        spectral: ["Spectral Regular", "serif"],
      },
      dropShadow: {
        highlight: "0 0 1rem #117fda",
      },
      width: {
        game: "320px",
      },
      height: {
        game: "180px",
      },
    },
  },
  plugins: [],
};
