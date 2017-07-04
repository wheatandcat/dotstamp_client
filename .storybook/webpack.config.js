/* eslint-disable */
module.exports = (storybookBaseConfig, _) => {
  storybookBaseConfig.module.rules.push(
    {
      test: /\.css$/,
      loader: "style-loader!css-loader?modules!postcss-loader",
    },
    {
      test: /\.json$/,
      loader: "json-loader",
    }
  )

  return storybookBaseConfig
}
