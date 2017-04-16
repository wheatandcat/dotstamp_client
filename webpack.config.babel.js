/*global process*/
/*global module*/
/*global __dirname*/
/*eslint no-console: ["error", { allow: ["log", "error"] }] */

import webpack from "webpack"
import loadenv from "node-env-file"

import precss from "precss"

import cssnext from "postcss-cssnext"
import cssimport from "postcss-import"
import sorting from "postcss-sorting"
import CompressionPlugin from "compression-webpack-plugin"

// 環境設定(デフォルト:develop)
var env = (process.env.NODE_ENV == undefined) ? "development" : process.env.NODE_ENV
console.log ("環境:"+env)
loadenv("./nodeConfig/." + env)

var pluginList
var output = __dirname + "/dist"

if (env == "production") {
  pluginList = [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(env),
      BASE_URL: JSON.stringify(process.env.BASE_URL),
      IMAGE_PATH: JSON.stringify(process.env.IMAGE_PATH),
      UPLOAD_PATH: JSON.stringify(process.env.UPLOAD_PATH),
      ENV: JSON.stringify(process.env.ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CompressionPlugin({asset: "[path].gz[query]", algorithm: "gzip", test: /\.js$/, threshold: 10240, minRatio: 0.8})
  ]

  output = __dirname + "/product"

} else {
  pluginList = [new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(env),
    BASE_URL: JSON.stringify(process.env.BASE_URL),
    IMAGE_PATH: JSON.stringify(process.env.IMAGE_PATH),
    UPLOAD_PATH: JSON.stringify(process.env.UPLOAD_PATH),
    ENV: JSON.stringify(process.env.ENV)
  })]
}

var cssLoaderConfig = ["style", "css?modules", "postcss"]

module.exports = [
  {
    context: __dirname + "/src",
    entry: {
      "js/application": "./js/app",
      "html": "./index.html"
    },
    output: {
      path: output,
      filename: "js/bundle.js"
    },
    resolve: {
      extensions: ["", ".js", ".jsx"]
    },
    devServer: {
      contentBase: __dirname + "/dist",
      host: "0.0.0.0",
      port: 3000
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel",
          query: {
            presets: ["react", "es2015"]
          }
        }, {
          test: /\.css$/,
          include: /css/,
          loaders: cssLoaderConfig
        }, {
          test: /\.html$/,
          loader: "file?name=[name].[ext]"
        }
      ]
    },
    plugins: pluginList,
    postcss: () => {
      return [cssimport, cssnext, precss, sorting]
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
]
