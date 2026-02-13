/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A3E66", // Navy Blue - Header, logo, footer, navigation
        secondary: "#FFFFFF", // White text/content
        accent: "#45A1E7", // Sky Blue - Icons, hover effects, dividers
        accentLight: "#A8CFF1", // Light Blue - Backgrounds, cards, sections
        cta: "#00589F", // Deep Blue - CTA buttons, links, highlights
        ctaHover: "#003F75", // Darker shade for hover
        support: "#B9A6DC", // Soft Lavender - Testimonials, offers, accents
        background: "#A8CFF1", // Light Blue - Page backgrounds
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
