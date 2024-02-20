/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		colors: {
			green: {
				400: "#EDF9F3",
				500: "#DBF3E8",
				600: "#C9EDDC",
				700: "#869E93",
				800: "#282F2C",
			},
			purple: {
				400: "#F9EDFF",
				500: "#ECC3FF",
				600: "#E2A5FF",
				700: "#976EAA",
				800: "#2D2133",
			},
			white: {
				100: "#FFFFFF",
				200: "#F5F7FA",
				300: "#CCCED0",
				400: "#7B7C7D",
				500: "#525253",
				600: "#313132",
			},
			blue: {
				400: "#E8F9F8",
				500: "#D2F2F1",
				600: "#BBECEA",
				700: "#7D9D9C",
				800: "#252F2F",
			},
			yellow: {
				400: "#FFEACD",
				500: "#FFD49B",
				600: "#FFBF69",
				700: "#AA7F46",
				800: "#332615",
			},
			error: "#F56565",
			correct: "#48BB78",
		},
		fontFamily: {
			sync: ["Syncopate", "sans-serif"],
			krona: ["Krona One", "sans-serif"],
			rubik: ["Rubik", "sans-serif"],
		},
		extend: {
			boxShadow: {
				card: "0px 8px 32px 0px rgba(0 0 0 0.12)",
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};
