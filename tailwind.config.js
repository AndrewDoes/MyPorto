/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This creates a `font-sans` class for your body text
        sans: ['Inter', 'sans-serif'],
        // This creates a `font-mono` class for your headings
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

