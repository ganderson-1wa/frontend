const path = require("path");
const webpack = require("webpack");

const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return require(`./webpack.config.${env}.js`)
}

module.exports = {
	entry: {
		main: ["./src/index.js"],
		styles: ["./src/main.scss"],
	},
	plugins: [
		new MiniCssExtractPlugin()
	],
	cache: false,
	devtool: false,
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.css$/,
				use: [{ loader: "style-loader" }],
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "style-loader",
						options: {
							sourceMap: false,
						},
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: false,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: false,
						},
					},
				],
			},
		],
	},
	performance: {
		maxAssetSize: 700000,
		maxEntrypointSize: 700000,
		hints: false
	},
	optimization: {
		splitChunks: {
			name: "vendor",
			chunks: "all",
		},
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
	watch: false,
	mode: "development",
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	output: {
		path: path.resolve(__dirname, "../docs/js"),
	},
};
