/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',             // Include the HTML file
      './src/**/*.{js,ts,jsx,tsx}' // Include all JS, TS, JSX, and TSX files in the src folder
    ],
    theme: {
      extend: {
        fontFamily: {
          'poppins' : ['poppins', 'san-serif']
        },
        colors: {
          'innovaPurple' : '35375F',
          'innovaGrey' : 'F2F1F1',
          'innovaOrange' : 'FCE9E9'
        }
      },
    },
    plugins: [],
  }
  