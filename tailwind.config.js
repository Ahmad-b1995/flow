/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--main))",
        text: "hsl(var(--text))",
        background1: "hsl(var(--background1))",
        background2: "hsl(var(--background2))",
        background3: "hsl(var(--background3))",
      },
    },
  },
  plugins: [],
};
