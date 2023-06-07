/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: "Nunito Sans",
        inter: "Inter",
      },
      backgroundImage: {
        heroBG: "url('/src/assets/heroBG.svg')",
      },
      colors: {
        purple: "#760ADF",
        primary: "#323232",
        secondary: "#848486",
      },
    },
  },
  plugins: [],
};
