/*global module*/
/* eslint-disable global-require */
var autoprefixer = require("autoprefixer")
var postcssNesting = require("postcss-nesting")

module.exports = function(storybookBaseConfig) {
  storybookBaseConfig.module.loaders.push(
    {
      test: /\.css$/,
      loader: "style!css?modules!postcss"
    },
    {
      test: /\.json$/,
      loader: "json-loader"
    }
  )

  storybookBaseConfig.postcss = function() {
    return [autoprefixer, postcssNesting]
  }

  return storybookBaseConfig
}
