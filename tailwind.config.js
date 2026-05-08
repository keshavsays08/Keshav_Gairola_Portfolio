// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      colors: {
        gold: "#c9a96e",
      },
    },
  },
  plugins: [],
};
