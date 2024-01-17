/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryRed: '#eb0914',
        secondaryRed: '#c11119',
       
      },
    },
  },
  plugins: [],
  darkMode: 'false', // Disable dark mode
};
