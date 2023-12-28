/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Work Sans", "sans-serif"],
      },
      colors: {
        lightgrey: "#F4F4F5",
        lightblue: "#4B6BFB",
        stroke: "#E8E8EA",
        primary: "#242535",
        darkcard: "#181A2A",
        darkfooter: "#141624",
      },
    },
  },
  plugins: [],
};
