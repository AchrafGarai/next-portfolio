// tailwind.config.ts
import { defineConfig } from "tailwindcss";

export default defineConfig({
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("tailwindcss-animate")],
});
