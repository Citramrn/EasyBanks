const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      white: "hsl(0, 0%, 100%)",
      "dark-blue": "hsl(233, 26%, 24%)",
      "very-light": "hsl(0deg 0% 98%)",
      "white-blue": "hsl(220deg 14% 96%)",
    }),
    colors: {
      primary: {
        "dark-blue": "hsl(233, 26%, 24%)",
        "lime-green": "hsl(136, 65%, 51%)",
        "bright-cyan": "hsl(192, 70%, 51%)",
      },
      uncommitted: {
        "dark-blue": "hsl(233, 26%, 24%)",
        white: "hsl(0, 0%, 100%)",
        "light-grayish-blue": "hsl(233, 8%, 62%)",
      },
    },
    backgroundImage: () => ({
      "header-desktop": "url('/icon/bg-intro-desktop.svg')",
      "header-mobile": "url('/icon/bg-intro-mobile.svg')",
      "image-mockups": "url('/images/image-mockups.png')",
    }),
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Public Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
