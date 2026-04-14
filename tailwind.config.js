/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f9fa",
        surface: "#ffffff",
        surface_container: "#edeeef",
        surface_container_low: "#f3f4f5",
        surface_container_lowest: "#ffffff",
        surface_bright: "#f8f9fa",
        on_surface: "#191c1d",
        primary: "#000000",
        on_primary_container: "#ec4a27",
        primary_cta_base: "#FF5733",
        primary_fixed: "#ffdad3",
        outline_variant: "#c6c6ce",
        secondary_container: "#d8defe",
        on_secondary_container: "#5b617d"
      },
      backgroundImage: {
        "cta-gradient": "linear-gradient(to right, #FF5733, #EC4A27)",
      },
    },
  },
  plugins: [],
};
