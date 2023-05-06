/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5251f7",
        "primary-dark": "#3f3ee5",
      },
    },
    fontFamily: {
      ubuntu: ["Ubuntu"],
    },
  },
  plugins: [],
};
