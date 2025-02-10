import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color-1)",
        foreground: "var(--foreground)",
        subtitle: "var(--color-subtitle)",
        primary: "var(--color-primary)",
        primary2: "var(--color-primary2)",
        darkBlue: "#111827",
        lightBlue: "#053c80",
        dark: "#162036",
      },
    },
  },
  plugins: [],
} satisfies Config;
