module.exports = (distRoot, optimize) => ({
  mode: "production",
  optimization: {
    minimize: !!optimize,
  },
  entry: "./src/index.js",
  output: {
    path: distRoot,
    filename: optimize ? "xyy-library.min.js" : "xyy-library.js",
    library: "xyyLibrary",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            envName: `dist-${optimize ? "prod" : "dev"}`,
          },
        },
      },
      { test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"] },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
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
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
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
  },
});
