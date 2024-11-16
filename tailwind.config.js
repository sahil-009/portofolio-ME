/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use Google Fonts like Inter
      },
      colors: {
        primary: '#4ade80', // Adjust this color to match your preference
        dark: '#111827',
        light: '#f9fafb',
      },
    },
  },
  plugins: [],
};
