const {
  resolve,
  isThereHaveBrowserslistConfig,
} = require("./utils/projectHelper");

module.exports = function (modules) {
  return {
    presets: [
      resolve("@babel/preset-react"),
      [
        resolve("@babel/preset-env"),
        {
          modules,
          targets: isThereHaveBrowserslistConfig()
            ? undefined
            : {
                browsers: [
                  "last 2 versions",
                  "Firefox ESR",
                  "> 1%",
                  "ie >= 11",
                ],
              },
        },
      ],
    ],
    plugins: [],
  };
};
