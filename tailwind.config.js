/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Lugrasimo', 'cursive'],
    },
    // colors: {
    //   'primary': '#d3468c'
    // },
    extend: {
    },
  },
  plugins: [],
}