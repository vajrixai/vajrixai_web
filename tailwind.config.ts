import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05060a",
        graphite: "#0a0c12",
        line: "rgba(255,255,255,.10)",
        mist: "#a9afbf",
        electric: "#3157ff",
        violet: "#9747ff",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      maxWidth: {
        site: "1440px",
      },
    },
  },
  plugins: [],
} satisfies Config;
