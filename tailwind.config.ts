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
        sidebar: {
          active: "#6b32ec",
          background: "#f5f5ff",
          iconColor: "#636c80",
        },
      },
    },
  },
  plugins: [],
};
export default config;
