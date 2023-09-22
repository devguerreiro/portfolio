/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // primary: "#6BFF39",
        primary: "#4169E1",
        dark: "#242424",
        dark_text: "#F5F5F5",
        dark_contrast: "#2F2F2F",
        light: "#F5F5F5",
        light_text: "#2F2F2F",
        light_contrast: "#FFF",
      },
      fontFamily: {
        kelly_slab: "Kelly Slab",
        baskerville: "Libre Baskerville",
        poppins: "Poppins",
        roboto: "Roboto",
        sans: "Roboto",
      },
      keyframes: {
        "slide-right": {
          from: { transform: "translateX(-300px)", opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-left": {
          from: { transform: "translateX(300px)", opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "slide-right": "slide-right 1s ease",
        "slide-left": "slide-left 1s ease",
      },
    },
  },
  plugins: [],
};
