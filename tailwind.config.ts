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
                'background': "var(--background)",
                'foreground': "var(--foreground)",
                'primary': "var(--primary)",
                'primary-foreground': "var(--primary-foreground)",
                'text-900': "var(--text-900)",
                'text-600': "var(--text-600)",
                'danger': "var(--danger)",
                'success': "var(--success)",
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                md: '1.5rem',
                lg: '2rem'
            },
        },
    },
    plugins: [],
} satisfies Config;