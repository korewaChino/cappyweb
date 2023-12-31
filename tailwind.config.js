/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme.tsx",
  ],
  theme: {
    extend: {
      fontFamily:{
        body: ['Inter Variable', 'Sarabun', 'sans-serif'],
        display: ['IBM Plex Sans Thai', 'sans-serif'],
        monospace: ['IBM Plex Mono', 'monospace'],
      },
      transitionTimingFunction: {
        pullout : 'cubic-bezier(0.33, 1.61, 0.06, 0.79)',
      }
      
    },
  },
  plugins: [],
}
