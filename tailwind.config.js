/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#235959",
      black: "#221e1b",
      white: "#ffffff",
      green: {
        light: "#d2f2e9",
        DEFAULT: "##206370",
      },
    },
    textColor: {
      primary: "#777",
      secondary: "#888888",
    },
    fontFamily: {
      primary: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
