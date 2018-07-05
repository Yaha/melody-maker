const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
		new HtmlWebpackPlugin({ filename: 'index.html', template: 'index.html', inject: true }),
		new webpack.HotModuleReplacementPlugin(),
	]
});
