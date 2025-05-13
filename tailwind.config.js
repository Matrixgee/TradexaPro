/** @type {import('tailwindcss').Config} */
import scrollbarPlugin from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      phone: { max: "764px" },
      tab: { max: "1024px" },
      desktop: { max: "1280px" },
      smallPhone: { max: "360px" },
    },
  },
  plugins: [scrollbarPlugin(), require("tailwind-scrollbar-hide")],
};
