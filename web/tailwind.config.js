/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enable dark mode via "class"
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Optional: add a clean modern palette for your blog
        primary: {
          light: "#3b82f6", // Tailwind blue-500
          dark: "#2563eb", // Tailwind blue-600
        },
        background: {
          light: "#ffffff",
          dark: "#111827", // Tailwind gray-900
        },
        text: {
          light: "#1f2937", // Tailwind gray-800
          dark: "#d1d5db", // Tailwind gray-300
        },
      },
    },
  },
  plugins: [],
};
