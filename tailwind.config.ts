import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: {
        100: "#7aa65a94",
        500: "#7aa65ad9",
        700: "#7AA65A",
      },
      white: "#fff",
      transparent: "transparent ",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      },
      boxShadow: {
        card: "6px 6px 9px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      addUtilities({
        ".text-shadow": {
          "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-md": {
          "text-shadow": "3px 3px 6px rgba(0, 0, 0, 0.6)",
        },
        ".text-shadow-lg": {
          "text-shadow": "4px 4px 8px rgba(0, 0, 0, 0.7)",
        },
        ".card-shadow": {
          "box-shadow": "4px 3px 9px rgba(0, 0, 0, 0.3)",
        },
      });
    },
  ],
};

export default config;
