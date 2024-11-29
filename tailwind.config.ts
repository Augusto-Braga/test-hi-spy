import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["inter", "sans-serif"],
      },
      colors: {
        background: "var(--black)",
        "dark-blue": "var(--dark-blue)",
        white: "var(--white)",
        gray: "var(--gray)",
        "dark-gray": "var(--dark-gray)",
        blue: "var(--blue)",
        "dark-green": "var(--dark-green)",
        "light-green": "var(--light-green)",
      },
    },
  },
  plugins: [],
} satisfies Config;
