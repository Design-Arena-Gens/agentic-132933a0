import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "ketch-sage": "#4A7C59",
        "ketch-tan": "#D2B48C",
        "ketch-peach": "#FFDAB9",
        "ketch-deep": "#233224"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"]
      },
      backgroundImage: {
        "soft-noise": "radial-gradient(circle at 20% 20%, rgba(255, 218, 185, 0.15), transparent 45%), radial-gradient(circle at 80% 0%, rgba(74, 124, 89, 0.18), transparent 55%), linear-gradient(120deg, rgba(74, 124, 89, 0.08), rgba(210, 180, 140, 0.12))"
      },
      boxShadow: {
        glow: "0 20px 45px rgba(74, 124, 89, 0.25)",
        subtle: "0 10px 25px rgba(35, 50, 36, 0.08)"
      }
    }
  },
  plugins: [forms]
};

export default config;
