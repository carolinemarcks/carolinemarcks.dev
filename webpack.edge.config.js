const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const definePlugin = new webpack.DefinePlugin({
  'process.env.AUTH_STRING': JSON.stringify(process.env.AUTH_STRING)
});

module.exports = {
  optimization: {
    minimize: false
  },
  target: "node",
  output: {
    libraryTarget: "commonjs",
    filename: "auth.js",
    path: path.resolve(__dirname, "dist/edge")
  },
  entry: './packages/edge/auth.js',
  mode: "production",
  plugins: [new CleanWebpackPlugin(), definePlugin]
};