/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: "#38bdf8",
          purple: "#a855f7"
        },
        surface: {
          dark: "#060b1a"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 24px rgba(56, 189, 248, 0.35)",
        card: "0 16px 40px rgba(5, 10, 30, 0.45)"
      },
      keyframes: {
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseRing: {
          "0%": { transform: "scale(0.98)", opacity: "0.6" },
          "100%": { transform: "scale(1.06)", opacity: "0.15" }
        }
      },
      animation: {
        gradientShift: "gradientShift 15s ease infinite",
        float: "float 6s ease-in-out infinite",
        pulseRing: "pulseRing 2.2s ease-in-out infinite alternate"
      }
    }
  },
  plugins: []
};
