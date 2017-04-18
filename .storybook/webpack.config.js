/*global process*/
/*global module*/
var webpack = require("webpack")
var loadenv = require("node-env-file")

var env = "test"
loadenv("./nodeConfig/." + env)

var pluginList = [new webpack.DefinePlugin({
  "process.env.NODE_ENV": JSON.stringify(env),
  BASE_URL: JSON.stringify(process.env.BASE_URL),
  IMAGE_PATH: JSON.stringify(process.env.IMAGE_PATH),
  UPLOAD_PATH: JSON.stringify(process.env.UPLOAD_PATH),
  ENV: JSON.stringify(process.env.ENV)
})]

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css?modules"
      }
    ]
  },
  plugins: pluginList,
}
