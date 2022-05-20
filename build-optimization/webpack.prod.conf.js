const webpackCommonConf = require("./webpack.common.conf");
const webpack = require("webpack");
const { smart } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    a: "./src/a.js",
    b: "./src/b.js",
    // index: "./src/index.js",
  },

  optimization: {
    splitChunks: {
      chunks: "all", //对所有的代码不管同步异步都做代码分割
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, //对windows和mac兼容
          priority: -10,
          filename: "vendors.js",
          minChunks: 1,
          reuseExistingChunk: true,
        },
        default: {
          filename: "common.js",
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"]],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
  ],
  output: {
    environment: { arrowFunction: false },

    filename: "[name].[contenthash:8].js",
    // library: "xyy-library",
    // libraryTarget: "umd",
  },
};
