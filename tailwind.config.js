/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0b0c0f",
        charcoal: "#131316",
        graphite: "#1f1f23",
        primary: "#6366f1",
        secondary: "#22d3ee",
        accent: "#c084fc", 
        muted: "#a1a1aa",
        border: "#27272a",
        card: "#1a1a1e",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}