/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#620007", // Deep Maroon - Headers, navbar, footer, strong accents
        secondary: "#84473C", // Warm Brown - Cards, section backgrounds, icons
        accent: "#B3967D", // Muted Taupe - Secondary text, borders, dividers
        accentLight: "#ECDBC7", // Soft Cream - Main background
        cta: "#890004", // Bold Red - CTA buttons, highlights, active states
        ctaHover: "#6B0003", // Darker red for hover
        support: "#84473C", // Warm Brown - Supporting elements
        background: "#ECDBC7", // Soft Cream - Page backgrounds
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
