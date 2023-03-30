/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#ffffff",
        "primary-color": "#4b95d9",
        "secondary-color": "#73a831",
        "primary-text-color": "#181c39",
        "secondary-text-color": "#e6ecfc",
      },
    },
  },
  plugins: [],
};
