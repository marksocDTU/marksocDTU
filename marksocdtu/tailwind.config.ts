import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#16417F",
        light: "#F3FDE8",
        primary: {
          500: "#068B7C",
          600: "#08736E",
        },
      },
    },
  },
  plugins: [],
};
export default config;

// How to create color shades in Tailwind CSS
// https://tailwindcss.com/docs/customizing-colors#color-palette-reference
