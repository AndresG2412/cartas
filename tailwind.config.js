/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
      },
      dropShadow: {
        'custom': '5px 8px 10px orange',
      }
    },
  },
  plugins: [],
}
