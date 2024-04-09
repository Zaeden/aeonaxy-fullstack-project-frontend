/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        seconday: {
          50: "#feeeee",
          400: "#e58d8c",
          900: "#ea4b8b"
        }
      }
    },
  },
  plugins: [],
}