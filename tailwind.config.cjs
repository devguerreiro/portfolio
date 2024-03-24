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
                "slide-in": {
                    "0%": {
                        transform: "translateX(-500px)",
                        opacity: "0",
                        filter: "blur(2px)",
                    },
                    "90%": {
                        transform: "translateX(0)",
                        opacity: "1",
                        filter: "blur(0)",
                    },
                },
                "slide-up": {
                    "0%": {
                        transform: "translateY(500px)",
                        opacity: "0",
                        filter: "blur(2px)",
                    },
                    "90%": {
                        transform: "translateY(0)",
                        opacity: "1",
                        filter: "blur(0px)",
                    },
                },
            },
            animation: {
                "slide-in": "slide-in 1.5s ease",
                "slide-up": "slide-up 1.5s ease",
            },
        },
    },
    plugins: [],
};
