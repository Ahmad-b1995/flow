/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--main))",
        text: {
          base_color: "hsl(var(--text-base-color))",
          primary_color_1: "hsl(var(--text-primary-color-1))",
          primary_color_2: "hsl(var(--text-primary-color-2))",
        },
        background1: "hsl(var(--background1))",
        background2: "hsl(var(--background2))",
        background3: "hsl(var(--background3))",
      },
    },
  },
  plugins: [],
};
