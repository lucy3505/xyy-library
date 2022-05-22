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
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
    },
    antd: {
      root: "antd",
      commonjs2: "antd",
      commonjs: "antd",
      amd: "antd",
    },
  },

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
