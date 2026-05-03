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
        // Brand palette — replace with user's official green when received
        brand: {
          50:  "#EEF7F2",
          100: "#D6ECDF",
          200: "#A9D5BA",
          300: "#73B98D",
          400: "#3F9C66",
          500: "#1F7A47",
          600: "#0F5C36",
          700: "#0F3D2E", // primary — dark forest green
          800: "#0A2A20",
          900: "#061811",
          950: "#03100A",
        },
        accent: {
          // muted gold — energetic but elegant
          DEFAULT: "#C9A961",
          bright: "#E1C46C",
          50:  "#FBF7EC",
          100: "#F5ECCF",
          200: "#EDDA9E",
          300: "#E1C46C",
          400: "#D2B048",
          500: "#C9A961",
          600: "#A38644",
          700: "#7C6633",
          800: "#544722",
          900: "#2B2511",
        },
        cream: "#FAFAF7",
        ink: "#0A0A0A",
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "system-ui", "sans-serif"],
        display: ["var(--font-heebo)", "system-ui", "sans-serif"],
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
