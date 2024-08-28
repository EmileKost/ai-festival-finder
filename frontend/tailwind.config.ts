import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				black: {
					primary: "#000000",
					secondary: "#000814",
				},
				white: {
					primary: "#FFFFFF",
				},
				grey: {
					primary: "#717171",
				},
			},
		},
	},
	plugins: [],
};
export default config;
