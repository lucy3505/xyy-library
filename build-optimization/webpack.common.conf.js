const { srcPath } = require("./paths");

//公共配置
module.exports = {
  entry: {
    index: path.join(srcPath, "index.js"),
    other: path.join(srcPath, "other.js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true, //缩短webpack编译速度，是babel-loader的配置
            presets: ["@babel/preset-env"],
          },
        },
        // include:srcPath,//include和exclude 2选1
        exclude: path.resolve(__dirname, "node_modules"),
      },
      {
        loader: "style-loader", // 将 JS 字符串生成为 style 节点
      },
      {
        loader: "css-loader", // 将 CSS 转化成 CommonJS 模块
      },
      {
        loader: "sass-loader", // 将 Sass 编译成 CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, "index.html"),
      filename: "index.html",
    }),
  ],
};
