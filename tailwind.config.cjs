/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#6BFF39",
        dark: "#242424",
        dark_text: "#F5F5F5",
        dark_contrast: "#2F2F2F",
        light: "#F5F5F5",
        light_text: "#2F2F2F",
        light_contrast: "#FFF",
      },
    },
  },
  plugins: [],
};
