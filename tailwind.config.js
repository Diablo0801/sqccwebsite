/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/Pages/Contact_Us/Image/fractal-1654672.jpg')"
      }
    },
  },
  plugins: [],
};