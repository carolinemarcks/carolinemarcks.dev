const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { isProduction } = require('webpack-mode');

const uglify = new UglifyJsPlugin({
  sourceMap: true,
  uglifyOptions: {
    dead_code: true,
  },
});

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  favicon: 'packages/site/static/images/favicon.ico',
  template: './index.html',
  filename: './index.html',
});

const definePlugin = new webpack.DefinePlugin({
  'process.env.DOMAIN_NAME': JSON.stringify(process.env.DOMAIN_NAME),
});

const basePlugins = [new CleanWebpackPlugin(), htmlWebpackPlugin, definePlugin];
const plugins = isProduction
  ? [...basePlugins, uglify]
  : [
      ...basePlugins,
      // new BundleAnalyzerPlugin()
    ];

module.exports = {
  entry: './packages/site/App.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/site'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.pdf(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        type: 'asset/resource',
        generator: {
          filename:'[name][ext]'
        } 
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
  plugins,
  devServer: {
    historyApiFallback: true,
  },
  devtool: "source-map"
};
