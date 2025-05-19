
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
        '2xl': '1536px',
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
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        // Updated colors for Pre-Consulta with new teal
        'verde-escuro': '#00897B', // New teal dark
        'verde-claro': '#4DB6AC', // New teal light
        'verde-neon': '#1DE9B6', // New teal neon accent
        'branco': '#F5F6F5',
        'cinza-escuro': '#2E2E2E',
        'dourado': '#D4AF37',
        'prata': '#C0C0C0',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.05)' },
        },
        'text-reveal': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'particle-float': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(5px, 5px)' },
          '50%': { transform: 'translate(0, 10px)' },
          '75%': { transform: 'translate(-5px, 5px)' },
        },
        'shine': {
          '0%': { left: '-100%' },
          '100%': { left: '200%' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '25%': { transform: 'translateY(-10px) rotate(1deg)' },
          '50%': { transform: 'translateY(0) rotate(0)' },
          '75%': { transform: 'translateY(10px) rotate(-1deg)' },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 2px rgba(78, 250, 156, 0.5))' },
          '50%': { filter: 'drop-shadow(0 0 10px rgba(78, 250, 156, 0.8))' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.8s ease-out forwards',
        'pulse': 'pulse 2s infinite',
        'text-reveal': 'text-reveal 1s ease-out forwards',
        'float': 'float 5s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 8s linear infinite',
        'particle-float': 'particle-float 8s ease-in-out infinite',
        'shine': 'shine 8s ease-in-out infinite',
        'float-slow': 'float-slow 15s ease-in-out infinite',
        'scale-up': 'scale-up 0.5s ease-out forwards',
        'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1A3C34, #A3C9A8)',
        'gradient-secondary': 'linear-gradient(90deg, #A3C9A8, #F5F6F5)',
        'texture-lines': "url('/texture-lines.svg')",
        'gradient-highlight': 'linear-gradient(135deg, #4EFA9C10, #A3C9A820)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(26, 60, 52, 0.15)',
        'elevated': '0 10px 30px -5px rgba(26, 60, 52, 0.25)',
        'neon': '0 0 10px rgba(78, 250, 156, 0.5), 0 0 20px rgba(78, 250, 156, 0.3)',
        'card-hover': '0 12px 40px -8px rgba(26, 60, 52, 0.3)',
        'premium': '0 15px 35px -5px rgba(26, 60, 52, 0.3), 0 0 5px rgba(163, 201, 168, 0.2)',
        '2xl': '0 25px 50px -12px rgba(26, 60, 52, 0.4)',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
