import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      lobster: {
        DEFAULT: "#ED1C24",
        50: "#FDECED",
        100: "#FCD9DA",
        200: "#F9B3B6",
        300: "#F68D91",
        400: "#F3686D",
        500: "#F04248",
        600: "#ED1C24",
        700: "#C20F16",
        800: "#8E0B10",
        900: "#5A070A",
        950: "#400507",
      },
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
};
export default config;
