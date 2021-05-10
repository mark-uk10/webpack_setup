const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	mode: "development",

	entry: {
		main: "./src/index.js",
	},
	// optimization: {
	// 	splitChunks: {
	// 		cacheGroups: {
	// 			styles: {
	// 				name: "styles",
	// 				test: /\.(s[ac]|c)ss$/i,
	// 				chunks: "all",
	// 				enforce: true,
	// 			},
	// 		},
	// 	},
	// },
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "images/[hash][ext][query]",
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset/resource",
				//asset/inline -  for small images not for large images as goes into index.js
				//asset - decides if image if image is inline or seperate
				// dataUrlCondition: {
				// 	maxSize: 30 * 1024,
				// },
				//decide on max size to make not inline
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					{
						loader: miniCssExtractPlugin.loader,
						options: { publicPath: "" },
					},
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new miniCssExtractPlugin({
			filename: "style.css",
			chunkFilename: "[name].css",
		}),

		new htmlWebpackPlugin({
			inject: false,
			template: "./src/index.html",
			filename: "./index.html",
			//chunks: ["main"],
		}),
		new webpack.HotModuleReplacementPlugin(),
	],

	resolve: {
		extensions: [".js", ".jsx"],
	},
	devtool: "source-map",

	devServer: {
		contentBase: "./dist",
		open: "Chrome",
		compress: true,
		hot: true,
	},
};
