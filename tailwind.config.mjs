export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#f97316", // vivid orange/red for smash burgers
                dark: "#0a0a0a",
                darker: "#050505",
                accent: "#ff3d00",
            },
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
                display: ['"Oswald"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
