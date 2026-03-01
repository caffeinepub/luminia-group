import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-xl': ['clamp(2.8rem, 6vw, 5.5rem)', { lineHeight: '1', letterSpacing: '-0.015em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.005em' }],
      },
      colors: {
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring) / <alpha-value>)',
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        primary: {
          DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
          foreground: 'oklch(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
          foreground: 'oklch(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
          foreground: 'oklch(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
          foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
          foreground: 'oklch(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'oklch(var(--popover))',
          foreground: 'oklch(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))'
        },
        gold: {
          DEFAULT: 'oklch(0.74 0.135 82)',
          light: 'oklch(0.84 0.11 82)',
          bright: 'oklch(0.88 0.13 82)',
          dim: 'oklch(0.52 0.09 82)',
          dark: 'oklch(0.42 0.08 82)',
        },
        obsidian: 'oklch(0.07 0 0)',
        charcoal: {
          DEFAULT: 'oklch(0.12 0.004 82)',
          mid: 'oklch(0.16 0.006 82)',
        },
        ivory: {
          DEFAULT: 'oklch(0.95 0.018 82)',
          dim: 'oklch(0.72 0.014 82)',
          faint: 'oklch(0.5 0.01 82)',
        },
        chart: {
          1: 'oklch(var(--chart-1))',
          2: 'oklch(var(--chart-2))',
          3: 'oklch(var(--chart-3))',
          4: 'oklch(var(--chart-4))',
          5: 'oklch(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'oklch(var(--sidebar))',
          foreground: 'oklch(var(--sidebar-foreground))',
          primary: 'oklch(var(--sidebar-primary))',
          'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
          accent: 'oklch(var(--sidebar-accent))',
          'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
          border: 'oklch(var(--sidebar-border))',
          ring: 'oklch(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
        gold: '0 0 24px oklch(0.74 0.135 82 / 0.35), 0 0 60px oklch(0.74 0.135 82 / 0.12)',
        'gold-sm': '0 0 12px oklch(0.74 0.135 82 / 0.28)',
        'gold-intense': '0 0 40px oklch(0.74 0.135 82 / 0.5), 0 0 80px oklch(0.74 0.135 82 / 0.2)',
        luxury: '0 24px 80px oklch(0 0 0 / 0.6), 0 0 40px oklch(0.74 0.135 82 / 0.12)',
        'luxury-card': '0 0 0 1px oklch(0.74 0.135 82 / 0.08), 0 0 40px oklch(0.74 0.135 82 / 0.18), 0 24px 80px oklch(0 0 0 / 0.6)',
        modal: '0 0 100px oklch(0.74 0.135 82 / 0.25), 0 60px 120px oklch(0 0 0 / 0.9), inset 0 1px 0 oklch(0.84 0.11 82 / 0.2)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-250% center' },
          '100%': { backgroundPosition: '250% center' }
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 12px oklch(0.74 0.135 82 / 0.3)' },
          '50%': { boxShadow: '0 0 30px oklch(0.74 0.135 82 / 0.65)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.7s ease-out forwards',
        shimmer: 'shimmer 4s linear infinite',
        'pulse-gold': 'pulse-gold 2.5s ease-in-out infinite',
      }
    }
  },
  plugins: [typography, containerQueries, animate]
};
