/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");

export default {
  // eslint-disable-next-line no-undef
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],

  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        londrina: ["Londrina Solid", "cursive"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui"), flowbite.plugin()],
};
