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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      /* ------------------ TYPOGRAPHY ------------------ */
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },

      /* ------------------ COLOR SYSTEM ------------------ */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

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
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        /* Institutional AI Palette */
        navy: {
          deep: "hsl(var(--navy-deep))",
          medium: "hsl(var(--navy-medium))",
          light: "hsl(var(--navy-light))",
        },
        teal: {
          DEFAULT: "hsl(var(--teal))",
          light: "hsl(var(--teal-light))",
        },
        cyan: "hsl(var(--cyan))",
        violet: {
          DEFAULT: "hsl(var(--violet))",
          glow: "hsl(var(--violet-glow))",
        },
        slate: "hsl(var(--slate))",
        charcoal: "hsl(var(--charcoal))",
      },

      /* ------------------ RADIUS ------------------ */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* ------------------ KEYFRAMES ------------------ */
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        neuralFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },

      /* ------------------ ANIMATIONS ------------------ */
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "neural-flow": "neuralFlow 20s ease infinite",
      },

      /* ------------------ BACKGROUNDS ------------------ */
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, hsl(var(--navy-deep)) 0%, hsl(var(--navy-medium)) 55%, hsl(var(--navy-light)) 100%)",
        "accent-gradient":
          "linear-gradient(135deg, hsl(var(--teal)) 0%, hsl(var(--violet)) 100%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
      },

      /* ------------------ BOX SHADOWS ------------------ */
      boxShadow: {
        glow: "0 0 40px hsl(var(--teal) / 0.35)",
        card: "0 20px 40px hsl(var(--navy-deep) / 0.45)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
