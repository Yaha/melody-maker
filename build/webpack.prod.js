const merge = require("webpack-merge");
const common = require("./webpack.common");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin(),
			new UglifyJsPlugin({
				cache: true,
				parallel: true
			})
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: "css-loader" },
					{ loader: "sass-loader" }
				]
			}
		]
	}
});
