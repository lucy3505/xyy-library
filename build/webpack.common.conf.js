// const { srcPath } = require("./paths");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//公共配置
module.exports = {
  entry: "./src/index.js",
  externals: {
    // react: {
    //   root: "React",
    //   commonjs2: "react",
    //   commonjs: "react",
    //   amd: "react",
    // },
    // "react-dom": {
    //   root: "ReactDOM",
    //   commonjs2: "react-dom",
    //   commonjs: "react-dom",
    //   amd: "react-dom",
    // },
    // antd: {
    //   root: "antd",
    //   commonjs2: "antd",
    //   commonjs: "antd",
    //   amd: "antd",
    // },
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
  resolve: {
    alias: {
      "@": path.join(__dirname, "..", "src"),
    },
  },
  // alias: {
  //   // Support React Native Web
  //   // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
  //   "react-native": "react-native-web",
  //   "@": path.join(__dirname, "..", "src"),
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            compact: true,
            // plugins: [
            //   [
            //     "import",
            //     {
            //       libraryName: "antd",
            //       style: "css",
            //     },
            //   ],
            // ],
          },
          // options: {
          //   cacheDirectory: true, //缩短webpack编译速度，是babel-loader的配置
          //   presets: ["@babel/preset-env"],
          // },
        },
        // include:srcPath,//include和exclude 2选1
        exclude: path.resolve(__dirname, "node_modules"),
      },
      { test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"] },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            // options: {
            //   importLoaders: 2,
            //   modules: true,
            // },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            // options: {
            //   importLoaders: 2,
            //   modules: true,
            // },
          },
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: path.join(srcPath, "index.html"),
      // filename: "index.html",
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(), //默认清空的是output下的path
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
  },
};
