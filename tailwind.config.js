/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        
        sans: ['Blue Sans', 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'BlinkMacSystemFont', '-apple-system', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      'custom-yellow': '#ffb700',
    },
  },
  plugins: [],
}

}