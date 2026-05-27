/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#E5B80B",
          light: "#F5D547",
          dark: "#B89409",
          muted: "#E5B80B33",
        },
        surface: {
          DEFAULT: "#0c0c0e",
          raised: "#141418",
          card: "#1a1a20",
          border: "#2a2a32",
        },
        primary: {
          light: "#F5D547",
          DEFAULT: "#E5B80B",
          dark: "#B89409",
        },
        secondary: {
          light: "#3d3d48",
          DEFAULT: "#2a2a32",
          dark: "#1a1a20",
        },
        accent: {
          light: "#F5D547",
          DEFAULT: "#E5B80B",
          dark: "#B89409",
        },
        neutral: {
          light: "#e4e4e7",
          DEFAULT: "#a1a1aa",
          dark: "#18181b",
          text: "#fafafa",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
        display: ["Outfit", "system-ui", "sans-serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};
