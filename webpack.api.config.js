const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, "node_modules")],
        test: /\.ts$/,
        use: "ts-loader"
      },
      {
        exclude: [path.resolve(__dirname, "node_modules")],
        test: /\.graphql$/,
        use: "graphql-import-loader"
      }
    ]
  },
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: ["*", ".mjs", ".ts", ".js", ".gql", ".graphql"]
  },
  target: "node",
  output: {
    libraryTarget: "commonjs",
    filename: "lambda.js",
    path: path.resolve(__dirname, "dist/api")
  },
  entry: './packages/api/lambda.ts',
  mode: "production",
  plugins: [new CleanWebpackPlugin()]
};