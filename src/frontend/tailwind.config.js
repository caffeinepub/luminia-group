/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'oklch(var(--background) / <alpha-value>)',
        foreground: 'oklch(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'oklch(var(--card) / <alpha-value>)',
          foreground: 'oklch(var(--card-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'oklch(var(--popover) / <alpha-value>)',
          foreground: 'oklch(var(--popover-foreground) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
          foreground: 'oklch(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
          foreground: 'oklch(var(--secondary-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
          foreground: 'oklch(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
          foreground: 'oklch(var(--accent-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
          foreground: 'oklch(var(--destructive-foreground) / <alpha-value>)',
        },
        border: 'oklch(var(--border) / <alpha-value>)',
        input: 'oklch(var(--input) / <alpha-value>)',
        ring: 'oklch(var(--ring) / <alpha-value>)',
        gold: {
          DEFAULT: 'oklch(0.78 0.15 85)',
          light: 'oklch(0.90 0.18 90)',
          dark: 'oklch(0.60 0.12 80)',
        },
        obsidian: {
          DEFAULT: 'oklch(0.08 0.01 285)',
          light: 'oklch(0.12 0.01 285)',
        },
        ivory: {
          DEFAULT: 'oklch(0.95 0.02 85)',
          muted: 'oklch(0.80 0.03 85)',
        },
        // Vibrant Holi Colors
        'holi-magenta': 'oklch(0.65 0.32 340)',
        'holi-orange':  'oklch(0.72 0.28 45)',
        'holi-lime':    'oklch(0.78 0.28 130)',
        'holi-cyan':    'oklch(0.72 0.22 200)',
        'holi-pink':    'oklch(0.70 0.30 355)',
        'holi-yellow':  'oklch(0.88 0.25 95)',
        'holi-purple':  'oklch(0.60 0.28 300)',
        'holi-red':     'oklch(0.62 0.28 25)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        full: '9999px',
      },
      boxShadow: {
        gold: '0 0 20px oklch(0.78 0.15 85 / 0.3)',
        'gold-lg': '0 0 40px oklch(0.78 0.15 85 / 0.4)',
        'gold-inner': 'inset 0 0 20px oklch(0.78 0.15 85 / 0.2)',
      },
      keyframes: {
        particleFall: {
          '0%':   { transform: 'translateY(-10vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
        logoFadeIn: {
          '0%':   { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        logoPulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.7' },
        },
        goldBurst: {
          '0%':   { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        rippleEffect: {
          '0%':   { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        shimmerText: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        modalBorderPulse: {
          '0%, 100%': { borderColor: 'oklch(0.78 0.15 85)' },
          '50%':      { borderColor: 'oklch(0.90 0.20 85)' },
        },
        scrollLine: {
          '0%':   { transform: 'scaleX(0)', transformOrigin: 'left' },
          '50%':  { transform: 'scaleX(1)', transformOrigin: 'left' },
          '51%':  { transform: 'scaleX(1)', transformOrigin: 'right' },
          '100%': { transform: 'scaleX(0)', transformOrigin: 'right' },
        },
        holiGradientShift: {
          '0%':   { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        holiFloat: {
          '0%':   { transform: 'translateY(0px) translateX(0px) rotate(0deg)', opacity: '0.9' },
          '25%':  { transform: 'translateY(-30px) translateX(15px) rotate(90deg)', opacity: '1' },
          '50%':  { transform: 'translateY(-15px) translateX(-10px) rotate(180deg)', opacity: '0.8' },
          '75%':  { transform: 'translateY(-40px) translateX(20px) rotate(270deg)', opacity: '1' },
          '100%': { transform: 'translateY(0px) translateX(0px) rotate(360deg)', opacity: '0.9' },
        },
        holiDrift: {
          '0%':   { transform: 'translateX(-5vw) translateY(0) scale(1)', opacity: '0' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '1' },
          '100%': { transform: 'translateX(105vw) translateY(-20vh) scale(0.5)', opacity: '0' },
        },
        holiRise: {
          '0%':   { transform: 'translateY(110vh) translateX(0) rotate(0deg) scale(1)', opacity: '0' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '0.8' },
          '100%': { transform: 'translateY(-10vh) translateX(30px) rotate(360deg) scale(0.6)', opacity: '0' },
        },
        holiTextFloat: {
          '0%':   { transform: 'translateY(0) rotate(-5deg) scale(1)', opacity: '0.85' },
          '33%':  { transform: 'translateY(-20px) rotate(5deg) scale(1.05)', opacity: '1' },
          '66%':  { transform: 'translateY(-10px) rotate(-3deg) scale(0.95)', opacity: '0.9' },
          '100%': { transform: 'translateY(0) rotate(-5deg) scale(1)', opacity: '0.85' },
        },
        holiSpinDrift: {
          '0%':   { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '5%':   { opacity: '1' },
          '95%':  { opacity: '1' },
          '100%': { transform: 'translateY(-10vh) rotate(1080deg)', opacity: '0' },
        },
        holiBlob: {
          '0%':   { transform: 'scale(1) translate(0, 0)' },
          '33%':  { transform: 'scale(1.15) translate(20px, -15px)' },
          '66%':  { transform: 'scale(0.9) translate(-10px, 20px)' },
          '100%': { transform: 'scale(1) translate(0, 0)' },
        },
      },
      animation: {
        'particle-fall': 'particleFall var(--duration, 3s) linear infinite',
        'logo-fade-in': 'logoFadeIn 1.5s ease forwards',
        'logo-pulse': 'logoPulse 3s ease-in-out infinite',
        'gold-burst': 'goldBurst 1s ease-out forwards',
        'ripple': 'rippleEffect 2s ease-out infinite',
        'shimmer': 'shimmerText 3s linear infinite',
        'modal-border': 'modalBorderPulse 2s ease-in-out infinite',
        'scroll-line': 'scrollLine 3s ease-in-out infinite',
        'holi-float': 'holiFloat var(--duration, 6s) ease-in-out infinite',
        'holi-drift': 'holiDrift var(--duration, 12s) linear infinite',
        'holi-rise': 'holiRise var(--duration, 10s) linear infinite',
        'holi-text-float': 'holiTextFloat var(--duration, 5s) ease-in-out infinite',
        'holi-spin-drift': 'holiSpinDrift var(--duration, 14s) linear infinite',
        'holi-blob': 'holiBlob var(--duration, 8s) ease-in-out infinite',
        'holi-gradient': 'holiGradientShift 4s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
};
