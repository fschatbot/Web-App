const plugin = require("tailwindcss/plugin");
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: { extend: {} },
	plugins: [
		plugin(function ({ addVariant }) {
			// Add a `third` variant, ie. `third:pb-0`
			addVariant("divider", "&[divider]");
			addVariant("divider-left", '&[divider="left"]');
			addVariant("divider-right", '&[divider="right"]');
		}),
	],
};
