/*global module*/
module.exports = function(storybookBaseConfig) {

  storybookBaseConfig.module.loaders.push({
    test: /\.css$/,
    loader: "style!css?modules"
  }, {
    test: /\.json$/,
    loader: "json-loader"
  })

  return storybookBaseConfig
}
