/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        primary: {
          light: "#C9C9C9",
          DEFAULT: "#888888", // Default gray
          dark: "#333333", // Dark gray
        },
        secondary: {
          light: "#7E57C2", // Light purple
          DEFAULT: "#673AB7", // Default purple
          dark: "#512DA8", // Dark purple
        },
        text: {
          DEFAULT: "#222222", // Blackish text
          gray: "#888888", // Grayish text
        },
        white: "#FFFFFF", // White color
      },
      fontFamily: {
        robotoc: ["Roboto Condensed", "sans"],
        roboto: ["Roboto", "sans"],
        young: ["Young Serif", "serif"],
      },
      fontWeight: {
        'young': 'normal', // Set the font weight to normal
      },
    },
  },
  plugins: [],
};
