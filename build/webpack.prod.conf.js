const webpackCommonConf = require("./webpack.common.conf");
const webpack = require("webpack");
// const { smart } = require("webpack-merge");
const baseConfig = require("./webpack.common.conf");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const prodConfig = {
  mode: "production",
  devtool: "cheap-module-source-map",

  // plugins: [
  //   new CleanWebpackPlugin(),
  //   new webpack.IgnorePlugin(/\.\/locale/, /moment/),
  // ],
  output: {
    library: "xyy-lib",
    libraryTarget: "umd",
  },
};
module.exports = merge(baseConfig, prodConfig);
