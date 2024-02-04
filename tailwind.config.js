/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-baner': "url('../assets/bg-baner.png')",
        'grens': "#DAE952",
      }
    },
  },
  plugins: [],
}

