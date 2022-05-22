const baseConfig = require("./webpack.common.conf");

const { merge } = require("webpack-merge");
const prodConfig = {
  mode: "production",
  devtool: "cheap-module-source-map",
  optimization: {
    // minimizer: [
    // new UglifyJsPlugin({
    //   cache: true,
    //   parallel: true,
    //   sourceMap: true,
    //   uglifyOptions: {
    //     warnings: false,
    //   },
    // }),
    // ],
  },
  externals: ["antd", "react", "react-dom"],

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
