/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{html,js,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    screens: {
      xxs: "350px",
      xs: "450px",
      "2xs": "550px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1836px",
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
};
