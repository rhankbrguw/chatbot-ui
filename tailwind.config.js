/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        beluga: "#F0F2F0",
        koopa: "#54C750",
        zinc: "#5B5B5B",
        lacquer: "#3E3F3E",
        dynamic: "#1E1E1E",
        whitent: "#060C06",
      },
    },
  },
  plugins: [],
};
