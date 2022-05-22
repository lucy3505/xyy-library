const {
  getProjectPath,
  resolve,
  injectRequire,
} = require("./utils/projectHelper"); // eslint-disable-line import/order

injectRequire();

// Show warning for webpack
process.traceDeprecation = true;

// Normal requirement
const path = require("path");
const webpack = require("webpack");
// const WebpackBar = require('webpackbar');
const webpackMerge = require("webpack-merge");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
// const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
// const CleanUpStatsPlugin = require('./utils/CleanUpStatsPlugin');

const svgRegex = /\.svg(\?v=\d+\.\d+\.\d+)?$/;
const svgOptions = {
  limit: 10000,
  minetype: "image/svg+xml",
};

const imageOptions = {
  limit: 10000,
};

function getWebpackConfig(modules) {
  const pkg = require(getProjectPath("package.json"));
  const babelConfig = require("./getBabelCommonConfig")(modules || false);

  // babel import for components
  babelConfig.plugins.push([
    resolve("babel-plugin-import"),
    {
      style: true,
      libraryName: pkg.name,
      libraryDirectory: "components",
    },
  ]);

  // Other package
  if (pkg.name !== "xyy-library") {
    babelConfig.plugins.push([
      resolve("babel-plugin-import"),
      {
        style: "css",
        libraryDirectory: "es",
        libraryName: "xyy-library",
      },
      "other-package-babel-plugin-import",
    ]);
  }

  // if (modules === false) {
  //   babelConfig.plugins.push(require.resolve("./replaceLib"));
  // }

  const config = {
    entry: ["./index"],

    devtool: "source-map",

    output: {
      path: getProjectPath("./dist/"),
      filename: "[name].js",
      library: pkg.name,
      libraryTarget: "umd",
    },

    resolve: {
      modules: ["node_modules", path.join(__dirname, "../node_modules")],
      extensions: [
        ".web.tsx",
        ".web.ts",
        ".web.jsx",
        ".web.js",
        ".ts",
        ".tsx",
        ".js",
        ".jsx",
        ".json",
      ],
      alias: {
        [pkg.name]: process.cwd(),
      },
    },

    module: {
      noParse: [/moment.js/],
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: resolve("babel-loader"),
          options: babelConfig,
        },

        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: resolve("css-loader"),
              options: {
                sourceMap: true,
              },
            },
            {
              loader: resolve("postcss-loader"),
              options: {
                postcssOptions: {
                  plugins: ["autoprefixer"],
                },
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: resolve("css-loader"),
              options: {
                sourceMap: true,
              },
            },
            {
              loader: resolve("postcss-loader"),
              options: {
                postcssOptions: {
                  plugins: ["autoprefixer"],
                },
                sourceMap: true,
              },
            },
            {
              loader: resolve("less-loader"),
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
                sourceMap: true,
              },
            },
          ],
        },
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
        // Images
        {
          test: svgRegex,
          loader: resolve("url-loader"),
          options: svgOptions,
        },
        {
          test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
          loader: resolve("url-loader"),
          options: imageOptions,
        },
      ],
    },

    //

    performance: {
      hints: false,
    },
  };

  if (process.env.RUN_ENV === "PRODUCTION") {
    const entry = ["./index"];

    // Common config
    // config.externals = {
    //   react: {
    //     root: "React",
    //     commonjs2: "react",
    //     commonjs: "react",
    //     amd: "react",
    //   },
    //   "react-dom": {
    //     root: "ReactDOM",
    //     commonjs2: "react-dom",
    //     commonjs: "react-dom",
    //     amd: "react-dom",
    //   },
    // };
    config.output.library = pkg.name;
    config.output.libraryTarget = "umd";
    // config.optimization = {
    //   minimizer: [
    //     new UglifyJsPlugin({
    //       cache: true,
    //       parallel: true,
    //       sourceMap: true,
    //       uglifyOptions: {
    //         warnings: false,
    //       },
    //     }),
    //   ],
    // };

    // Development
    const uncompressedConfig = webpackMerge({}, config, {
      entry: {
        [pkg.name]: entry,
      },
      mode: "development",
      plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css",
        }),
      ],
    });

    // Production
    const prodConfig = webpackMerge({}, config, {
      entry: {
        [`${pkg.name}.min`]: entry,
      },
      mode: "production",
      plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.LoaderOptionsPlugin({
          minimize: true,
        }),
        new MiniCssExtractPlugin({
          filename: "[name].css",
        }),
      ],
      optimization: {
        minimize: true,
        // minimizer: [new CssMinimizerPlugin({})],
      },
    });
    console.log("process.env.RUN_ENV :::::", process.env.RUN_ENV);
    return [prodConfig, uncompressedConfig];
  }

  return [config];
}

getWebpackConfig.webpack = webpack;
getWebpackConfig.svgRegex = svgRegex;
getWebpackConfig.svgOptions = svgOptions;
getWebpackConfig.imageOptions = imageOptions;

module.exports = getWebpackConfig;
