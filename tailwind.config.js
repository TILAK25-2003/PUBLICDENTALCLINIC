/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A1A2F", // Deep Navy Blue - Header, navbar, footer, hero
        secondary: "#F7F7F7", // Soft Off-White - Alternate section backgrounds
        accent: "#D4AF37", // Champagne Gold - Buttons, icons, highlights
        accentLight: "#FFFFFF", // Pure White - Main background, content
        cta: "#D4AF37", // Champagne Gold - CTA buttons
        ctaHover: "#B8960F", // Darker gold for hover
        support: "#D4AF37", // Champagne Gold - Supporting elements
        background: "#FFFFFF", // Pure White - Base background
        darkBg: "#0A1A2F", // Deep Navy - Depth layers
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
