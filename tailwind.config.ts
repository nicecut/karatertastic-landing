
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#2A6F3B',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F5ECE3',
          foreground: '#1A1A1A',
        },
        accent: {
          DEFAULT: '#E8D5C4',
          foreground: '#1A1A1A',
        },
        muted: {
          DEFAULT: '#F8F8F8',
          foreground: '#666666',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in": {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
