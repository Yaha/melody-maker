const OfflinePlugin = require("offline-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env"],
						plugins: [["transform-react-jsx", { pragma: "h" }]]
					}
				}
			}
		]
	},
	plugins: [
		new OfflinePlugin(),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "index.html",
			inject: true
		})
	]
};
