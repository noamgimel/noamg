import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — emerald/teal green
        brand: {
          50:  "#E9FAF4",
          100: "#CBF3E6",
          200: "#97E6D0",
          300: "#5FD6B0",
          400: "#1FBF8C",
          500: "#12B07A",
          600: "#0E9F6E", // vivid emerald — accent / brand identity
          700: "#0A6B49", // deep emerald — text & structure (readable on light)
          800: "#0A4231",
          900: "#0B2E24", // dark background / brand dark
          950: "#061B14",
        },
        accent: {
          // warm amber — energetic but elegant
          DEFAULT: "#F4B740",
          bright: "#F7C863",
          50:  "#FEF8EC",
          100: "#FDEFCB",
          200: "#FAE0A0",
          300: "#F7C863",
          400: "#EBA92A",
          500: "#F4B740",
          600: "#C7902B",
          700: "#997023",
          800: "#6B4E18",
          900: "#3A2C0E",
        },
        cream: "#FBFDFC",
        ink: "#0E1A15",
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "system-ui", "sans-serif"],
        display: ["var(--font-heebo)", "system-ui", "sans-serif"],
        handwriting: ["var(--font-handwriting)", "cursive"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { "background-position": "-200% 0" },
          "100%": { "background-position": "200% 0" },
        },
      },
      backgroundImage: {
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/></svg>\")",
      },
    },
  },
  plugins: [],
};

export default config;
