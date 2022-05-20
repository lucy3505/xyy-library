const { distPath, srcPath } = require("./paths");
// const { smart } = require("webpack-merge");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.common.conf");
const devConfig = {
  mode: "development",
  //当不使用dev-server的话可以使用watch相关配置，有dev-server的话自动就有这些配置
  // watch: true,
  // watchOptions: {
  //   ignored: /node_modules/,
  //   aggregateTimeout: 300, //节流刷新页面，文件变了隔多久再去进行打包
  //   poll: 1000,//去询问当前电脑文件是否变化的事件
  // },

  devServer: {
    port: 8000,
    // contentBase: distPath,
    progress: true,
    open: true,
    compress: true,
  },
  output: {
    library: "xyy-lib",
    libraryTarget: "umd",
  },
};
module.exports = merge(baseConfig, devConfig);
