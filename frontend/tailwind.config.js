/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "rgba(212,175,55,1)",
          bright: "rgba(255,215,80,1)",
          dim: "rgba(212,175,55,0.6)",
          faint: "rgba(212,175,55,0.25)",
          subtle: "rgba(212,175,55,0.1)",
        },
        obsidian: {
          DEFAULT: "#080808",
          mid: "#0f0f0f",
          light: "#1a1a1a",
          charcoal: "#111111",
        },
        ivory: {
          DEFAULT: "rgba(255,248,220,0.85)",
          faint: "rgba(255,248,220,0.4)",
        },
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Cormorant Garamond'", "Georgia", "serif"],
      },
      fontSize: {
        display: ["clamp(3rem, 10vw, 8rem)", { lineHeight: "1", letterSpacing: "-0.01em" }],
        headline: ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1.1" }],
        subheading: ["clamp(1.2rem, 3vw, 2rem)", { lineHeight: "1.3" }],
      },
      borderRadius: {
        none: "0",
        sm: "0",
        DEFAULT: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        full: "9999px",
      },
      boxShadow: {
        gold: "0 0 20px rgba(212,175,55,0.2)",
        "gold-intense": "0 0 40px rgba(212,175,55,0.4), 0 0 80px rgba(212,175,55,0.15)",
        "luxury-card": "0 0 30px rgba(212,175,55,0.12), inset 0 0 30px rgba(212,175,55,0.04)",
        modal: "0 0 60px rgba(212,175,55,0.15), 0 0 120px rgba(212,175,55,0.05)",
      },
      keyframes: {
        particleFall: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "0.6" },
          "100%": { transform: "translateY(110vh)", opacity: "0" },
        },
        shimmerText: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        goldBurst: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
          "100%": { opacity: "0", transform: "scale(2)" },
        },
        rippleEffect: {
          "0%": { width: "0", height: "0", opacity: "0.8" },
          "100%": { width: "300px", height: "300px", opacity: "0" },
        },
        scrollLine: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top", opacity: "1" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top", opacity: "1" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom", opacity: "0" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        logoPulse: {
          "0%, 100%": { filter: "drop-shadow(0 0 24px rgba(212,175,55,0.7))" },
          "50%": { filter: "drop-shadow(0 0 40px rgba(212,175,55,1))" },
        },
        modalBorderPulse: {
          "0%, 100%": { boxShadow: "0 0 60px rgba(212,175,55,0.15)" },
          "50%": { boxShadow: "0 0 80px rgba(212,175,55,0.25)" },
        },
      },
      animation: {
        "particle-fall": "particleFall linear infinite",
        "shimmer-text": "shimmerText 2.5s linear infinite",
        "gold-burst": "goldBurst 0.6s ease-out forwards",
        "ripple": "rippleEffect 0.6s ease-out forwards",
        "scroll-line": "scrollLine 2s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease forwards",
        "logo-pulse": "logoPulse 2.5s ease-in-out infinite",
        "modal-border": "modalBorderPulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
