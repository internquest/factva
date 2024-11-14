/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        't91': { 'max': '991px' },
        't767': { 'max': '767px' },
        'b9214': { 'min': '992px', 'max': '1439px' },
        'b791': { 'min': '768px', 'max': '991px' },
        // 'a14': { 'min': '1440px' }
      }
      ,
      fontFamily: {
        unsans: "var(--font-unsans)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
