/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          card: "var(--bg-card)",
          cardHover: "var(--bg-card-hover)",
          glass: "var(--bg-glass)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        brand: {
          primary: "var(--brand-primary)",
          primaryHover: "var(--brand-primary-hover)",
          secondary: "var(--brand-secondary)",
          accent: "var(--brand-accent)",
          badge: "var(--brand-badge)",
        },
        border: {
          light: "var(--border-light)",
          medium: "var(--border-medium)",
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(136, 19, 55, 0.05)',
        'card': '0 10px 30px -5px rgba(136, 19, 55, 0.08)',
        'glass': '0 8px 32px 0 rgba(136, 19, 55, 0.06)',
      }
    },
  },
  plugins: [],
}