/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#3B82F6",
        secondary: "#EDE9FE",
        navy: "#1E293B",
        textDark: "#1F2A44",
        bgLight: "#F9FAFB",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(45deg, #3B82F6, #7C3AED)",
      },
    },
  },
  plugins: [],
};
