module.exports = {
	plugins: [
		require("tailwindcss"),
		require("postcss-nested"),
		require("autoprefixer"),
		require("@fullhuman/postcss-purgecss")({
			content: [
				"./src/**/*.tsx",
				"./src/**/*.jsx",
				"./src/**/*.js",
				"./public/index.html",
      ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
		}),
	],
};
