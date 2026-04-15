import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FDF8F3",
        pink: {
          soft: "#F8D7D4",
          DEFAULT: "#F2C0BC",
        },
        gold: {
          DEFAULT: "#C9A96E",
          dark: "#A88955",
        },
        ink: "#2B2420",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        serif: ["var(--font-cormorant)", "serif"],
        script: ["var(--font-dancing)", "cursive"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.3em",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(43, 36, 32, 0.15)",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", md: "2rem", lg: "3rem" },
      },
    },
  },
  plugins: [],
};

export default config;
