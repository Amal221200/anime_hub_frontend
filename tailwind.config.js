/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        ['auth-width']: "clamp(300px, 40vw, 400px)",
      },
    },
  },
  plugins: [],
}