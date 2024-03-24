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
                    from: {
                        transform: "translateX(-500px)",
                    },
                    to: {
                        transform: "translateX(0)",
                    },
                },
                "slide-up": {
                    from: {
                        transform: "translateY(500px)",
                    },
                    to: {
                        transform: "translateY(0)",
                    },
                },
                "fade-in": {
                    from: {
                        opacity: "0",
                    },
                    to: {
                        opacity: "1",
                    },
                },
            },
            animation: {
                "slide-in": "slide-in 0.75s ease, fade-in 0.75s ease",
                "slide-up": "slide-up 0.75s ease-out, fade-in 0.75s ease-out",
            },
        },
    },
    plugins: [],
};
