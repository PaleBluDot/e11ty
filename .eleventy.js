module.exports = function (eleventyConfig) {
	let markdownIt = require("markdown-it");
	let options = {
		html: true,
		breaks: true,
		linkify: true,
	};
	let markdownLib = markdownIt(options).disable("code");
	eleventyConfig.setLibrary("md", markdownLib);

	eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
	eleventyConfig.addLayoutAlias("email-base", "layouts/email-base.njk");

	eleventyConfig.addPassthroughCopy({ "src/styles": "/" });

	return {
		htmlTemplateEngine: "njk",
		templateFormats: ["html", "njk", "md"],
		markdownTemplateEngine: "njk",
		passthroughFileCopy: true,
		dir: {
			input: "src",
			output: "dist",
			data: "_data",
		},
	};
};
