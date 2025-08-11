import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1E3A8A",
          light: "#E6F0FF",
        },
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
};
export default config;
