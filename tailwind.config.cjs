/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'geometric': ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

