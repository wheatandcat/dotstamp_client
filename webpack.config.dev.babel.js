/*global module*/
/*global __dirname*/
/*eslint no-console: ["error", { allow: ["log", "error"] }] */
import webpack from "webpack"
import postcssImport from "postcss-smart-import"
import postcssCssnext from "postcss-cssnext"
import postcssSorting from "postcss-sorting"
import precss from "precss"
import loadenv from "node-env-file"

var env = "development"
console.log("環境:" + env)
loadenv("./nodeConfig/." + env)

var publicPath = "http://localhost:3000/"


module.exports = {
  context: __dirname + "/src",
  entry: {
    "js/application": "./js/app",
  },
  output: {
    path: __dirname + "/dist",
    pathinfo: true,
    filename: "js/bundle.js",
    publicPath: publicPath
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: __dirname + "/dist",
    host: "0.0.0.0",
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        include: /css/,
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true,
            }
          },
          {
            loader: "css-loader",
            options: {
              localIdentName: "[hash:base64]-[name]-[local]",
              modules: true,
              sourceMap: true,
            }
          } ,{
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin([
      "BASE_URL",
      "IMAGE_PATH",
      "UPLOAD_PATH",
      "ENV",
    ]),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [require("autoprefixer")({browsers: ["last 2 versions"]})]
      }
    }),
    postcssImport,
    postcssCssnext,
    precss,
    postcssSorting
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}
