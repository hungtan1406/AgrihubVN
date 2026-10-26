import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          950: "#124322", // Rich lush botanical green (brightened from #081a0c)
          900: "#1a572d", // Fresh evergreen (brightened from #0d2613)
          850: "#1f6434", // Vibrant Deep Forest Green for Headings (brightened from #13381b)
          800: "#27753d",
          700: "#318749",
          600: "#3b9a55",
          leaf: "#3b8e47", // Fresh, bright, energetic leaf green for CTAs & highlights
          leafHover: "#30793a",
          lime: "#7cb342", // Bright leaf accent
          100: "#def0d8",
          50: "#f0f8ed",
        },
        cream: {
          50: "#fdfbf6",
          100: "#faf7ee", // Core Warm Cream Background (from image 2)
          200: "#f5f0df",
          300: "#efe8d0", // Warm Wheat Pill Background (from image 1 navigation)
          400: "#e5dcbe",
          500: "#d3c69f",
        },
        surface: {
          cream: "#faf7ee",
          pill: "#efe8d0",
          card: "#ffffff",
        },
        accent: {
          gold: "#c8963e", // Gold from Agrihub logo
          goldLight: "#f4e0af",
          mango: "#f59e0b", // Primary amber for CTA button
        },
      },
      fontFamily: {
        // Primary font for vi + en: Be Vietnam Pro via CSS variable. For zh-CN, CJK fallback stack.
        sans: [
          "var(--font-be-vietnam-pro)",
          "Be Vietnam Pro",
          "Noto Sans SC",   // CJK Simplified Chinese fallback
          "PingFang SC",
          "Microsoft YaHei",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        // font-arial removed — violates 1-font rule. Use font-sans everywhere.
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
      },
      maxWidth: {
        container: "1240px",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(19, 56, 27, 0.08)",
        pill: "0 4px 14px 0 rgba(19, 56, 27, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
