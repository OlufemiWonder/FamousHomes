/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "famous-blue": {
          DEFAULT: "#0f172a",
          light: "#1e293b",
          dark: "#020617",
          vibrant: "#2563eb",
        },
        "famous-gold": {
          DEFAULT: "#fbbf24",
          dark: "#b45309",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
