/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        tablet: "768px",
        desktop: "1024px",
        largeDesktop: "1440px",
      },
    },
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
      green: "#206370",
    },
    fontFamily: {
      primary: ["Lato", "sans-serif"],
    },
    fontSize: {
      title: "2.5rem",
      subtitle: "1.5rem",
    },
  },
  plugins: [],
};
