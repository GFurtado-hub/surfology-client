/** @type {import('tailwindcss').Config} */
export default {
    content: [
    './src/*/.{html,js,jsx,ts,tsx}', // Adjust paths based on your project structure
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors if needed
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
  