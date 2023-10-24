/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '12': '12px', // Add a custom border width of 12px
        '16': '16px', // Add a custom border width of 16px
      },
      colors: {

      'background':  '#e4f1fe',
      'background1': '#0f172a',
      'background2': '#1e293b',
      'text1'      : '#d1d5db',
      'text2'      : '#fafafa',
      'texthighlighted': '#1d4ed8',
    },},
    
  },
  plugins: [],
  
}

