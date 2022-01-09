module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				FadeIn: "FadeIn 0.5s ease-in-out forwards",
				spin2: "spin 5s linear infinite",
			},
			keyframes: {
				FadeIn: {
					"0%": { opacity: 0, transform: "translateX(-20px)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
			},
		},
	},
	plugins: [],
};
