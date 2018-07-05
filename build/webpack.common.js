const path = require('path');
const OfflinePlugin = require('offline-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: [["transform-react-jsx", { "pragma": "h" }]]
        }
      }
    },
    {
      test: /\.scss$/,
      use: [
        "scss-loader",
        "css-loader",
        "sass-loader"
      ]
    }],
  },
  plugins: [
    new OfflinePlugin()
  ]
};
