const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require('webpack');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  favicon: 'packages/site/static/images/favicon.ico',
  template: './index.html',
  filename: './index.html',
});

const definePlugin = new webpack.DefinePlugin({
  'process.env.DOMAIN_NAME': JSON.stringify(process.env.DOMAIN_NAME)
});

module.exports = {
  entry: './packages/site/App.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/site'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader:
          'style-loader!css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]',
      },
      {
        test: /\.scss$/,
        loaders:
          'style-loader!css-loader!sass-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]',
      },
      {
        // host pdfs at top level
        test: /\.pdf(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?minetype=application/pdf&name=[name].[ext]',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: 'file-loader?name=[path][name].[ext]',
      },
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [new CleanWebpackPlugin(), htmlWebpackPlugin, definePlugin],
  devServer: {
    historyApiFallback: true,
  },
};
