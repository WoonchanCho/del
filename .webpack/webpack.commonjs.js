const webpack = require('webpack');
const path = require('path');
const DIST_DIR = path.join(__dirname, '../dist');

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'JsXnat',
    libraryExport: 'default',
    libraryTarget: 'umd',
    globalObject: 'this',
    filename: 'jsxnat.umd.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [new webpack.ProvidePlugin({ self: {} })],
};
