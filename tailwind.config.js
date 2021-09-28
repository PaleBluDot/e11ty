module.exports = {
	purge: {
		enabled: true,
		mode: "all",
		preserveHtmlElements: false,
		content: ["./src/templates/*.html"],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#f3ef07",
				black: "#4f404d",
				white: "#4f404d",
				grey: "#888888",
				transparent: "transparent",
				current: "currentColor",
			},
		},
		variants: {
			extend: {},
		},
		plugins: [],
	},
};
