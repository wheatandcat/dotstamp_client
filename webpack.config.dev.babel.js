/* eslint-disable */
import webpack from "webpack"
import { resolve } from "path"
import precss from "precss"
import loadenv from "node-env-file"

var env = "development"
console.log("環境:" + env)
loadenv("./nodeConfig/." + env)

module.exports = {
  context: resolve(__dirname, "src"),
  entry: {
    "js/application": "./js/app",
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"]
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
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            }
          },
          {
            loader: "postcss-loader",
          },
        ],
      }
    ]
  },
  plugins: [
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
    precss,
  ],
}
