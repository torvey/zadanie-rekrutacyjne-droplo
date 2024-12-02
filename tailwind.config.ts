import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    primary: "#FFFFFF",
                    secondary: "#F9FAFB",
                },
                border: {
                    primary: "#D0D5DD",
                    secondary: "#EAECF0",
                },
                "btn-bg": {
                    primary: "#7F56D9",
                    secondary: "#FFFFFF",
                },
                "btn-text": {
                    primary: "#FFFFFF",
                    secondary: "#344054",
                    tertiary: "#6941C6",
                },
                text: {
                    primary: "#101828",
                    secondary: "#344054",
                    tertiary: "#475467",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;

// #7F56D9
