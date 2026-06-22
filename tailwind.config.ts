import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "#E2E8F0",
        input: "#E2E8F0",
        ring: "#3B82F6",
        background: "#F8FAFC",
        foreground: "#0F172A",
        primary: {
          DEFAULT: "#2563EB",
          foreground: "#FFFFFF"
        },
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#64748B"
        },
        navy: {
          950: "#020617",
          900: "#030712",
          850: "#07111F",
          800: "#0B1220"
        },
        violet: {
          600: "#7C3AED",
          500: "#8B5CF6"
        },
        whatsapp: "#16A34A"
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(59,130,246,0.12), 0 22px 56px rgba(37,99,235,0.16)",
        "violet-glow":
          "0 0 0 1px rgba(124,58,237,0.2), 0 24px 60px rgba(124,58,237,0.2)",
        card: "0 18px 48px rgba(15,23,42,0.06), 0 2px 10px rgba(15,23,42,0.04)"
      },
      backgroundImage: {
        "mesh-dark":
          "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.28), transparent 32%), radial-gradient(circle at 80% 10%, rgba(124,58,237,0.22), transparent 34%), linear-gradient(135deg, #020617 0%, #07111F 48%, #030712 100%)",
        "blue-violet": "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)"
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(150%)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.62", transform: "scale(1)" },
          "50%": { opacity: "0.95", transform: "scale(1.04)" }
        }
      },
      animation: {
        shimmer: "shimmer 2.8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite"
      }
    }
  },
  plugins: [animate]
};

export default config;
