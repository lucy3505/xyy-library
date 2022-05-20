const { distPath, srcPath } = require("./paths");
const { smart } = require("webpack-merge");
module.exports = {
  mode: "development",
  entry: {
    a: "./src/a.js",
    b: "./src/b.js",
    // index: "./src/index.js",
  },
  //当不使用dev-server的话可以使用watch相关配置，有dev-server的话自动就有这些配置
  // watch: true,
  // watchOptions: {
  //   ignored: /node_modules/,
  //   aggregateTimeout: 300, //节流刷新页面，文件变了隔多久再去进行打包
  //   poll: 1000,//去询问当前电脑文件是否变化的事件
  // },

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
  devServer: {
    port: 8000,
    contentBase: distPath,
    progress: true,
    open: true,
    compress: true,
  },
  output: {
    environment: { arrowFunction: false },

    filename: "[name].[contenthash:8].js",
    // library: "xyy-library",
    // libraryTarget: "umd",
  },
};
