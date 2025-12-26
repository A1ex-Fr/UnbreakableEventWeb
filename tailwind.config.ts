import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 10px 30px -18px rgba(0,0,0,0.65)",
      },
    },
  },
  plugins: [],
} satisfies Config;

