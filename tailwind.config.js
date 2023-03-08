/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#206370",
      black: "#221e1b",
      white: "#ffffff",
      green: {
        light: "#d2f2e9",
        DEFAULT: "##206370",
      },
      gray: { light: "#fafafa", DEFAULT: "#c0c0c0" },
    },
    textColor: {
      primary: "#777",
      secondary: "#888888",
      white: "#ffffff",
    },
    fontFamily: {
      primary: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
