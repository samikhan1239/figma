/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#3B82F6",
          dark: "#60A5FA",
        },
        secondary: {
          light: "#EDE9FE",
          dark: "#4B5563",
        },
        navy: {
          light: "#1E293B",
          dark: "#111827",
        },
        textDark: {
          light: "#1F2A44",
          dark: "#D1D5DB",
        },
        bgLight: {
          light: "#F9FAFB",
          dark: "#1F2937",
        },
      },
      backgroundImage: {
        "gradient-primary-light": "linear-gradient(45deg, #3B82F6, #7C3AED)",
        "gradient-primary-dark": "linear-gradient(45deg, #60A5FA, #A78BFA)",
      },
    },
  },
  plugins: [],
};
