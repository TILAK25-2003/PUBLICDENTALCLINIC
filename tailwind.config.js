/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#620000", // Deep Maroon - Navigation, headings, footer
        secondary: "#450000", // Dark Wine Red - Cards, content sections
        accent: "#800000", // Crimson Red - Primary brand, highlights
        accentLight: "#2A0001", // Near-Black Red - Gradients, depth
        cta: "#800000", // Crimson Red - CTA buttons
        ctaHover: "#620000", // Deep Maroon for hover
        support: "#2A0001", // Near-Black Red - Supporting elements
        background: "#000000", // Pure Black - Base background
        darkBg: "#0A0000", // Very dark red-black for depth
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
}
