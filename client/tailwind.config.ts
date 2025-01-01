import type { Config } from "tailwindcss";
import daisyui from "daisyui";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    daisyui: {
      themes: ["light", "dark"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bordo: "var(--bordo)",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
