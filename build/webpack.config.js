const getWebpackConfig = require("./getWebpackConfig.js");
const webpackConfig = getWebpackConfig(false);

module.exports = [...webpackConfig];
