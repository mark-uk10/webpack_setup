const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	//mode: development,

	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					miniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	plugins: [new miniCssExtractPlugin()],
	devtool: "source-map",

	devServer: {
		contentBase: "./dist",
		hot: true,
	},
};
