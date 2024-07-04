import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
      body: ['"Montserrat"', "sans-serif"],
      mono: ['"Montserrat"', "sans-serif"],
      sans: ['"Montserrat"', "sans-serif"],
      semibold: ['"Montserrat"', "sans-serif"],
      bold: ['"Montserrat"', "sans-serif"],
      normal: ['"Montserrat"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

export default config;
