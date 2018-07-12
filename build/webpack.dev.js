const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
	devServer: {
		contentBase: "./dist",
		hot: true,
		stats: {
			assets: true,
			children: false,
			entrypoints: false,
			modules: false
		}
	},
	devtool: "inline-source-map",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader", options: { sourceMap: true } },
					{ loader: "sass-loader", options: { sourceMap: true } }
				]
			}
		]
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
});
