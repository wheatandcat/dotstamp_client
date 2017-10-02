/* eslint-disable */
import webpack from "webpack";
import { resolve } from "path";
import loadenv from "node-env-file";

var publicPath = "http://localhost:3000/";

var env = "local";
console.log("環境:" + env);
loadenv("./nodeConfig/." + env);

module.exports = {
  context: resolve(__dirname, "src"),
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./js/app"
  ],
  output: {
    filename: "js/bundle.js",
    path: resolve(__dirname, "dist"),
    publicPath: publicPath
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: resolve(__dirname, "dist"),
    host: "localhost",
    hot: true,
    port: 3000,
    historyApiFallback: true,
    stats: {
      colors: true
    },
    proxy: {
      "/api/": {
        target: "http://192.168.33.10:80/",
        secure: false
      },
      "/static/": {
        target: "http://192.168.33.10:80/",
        secure: false
      }
    }
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        include: /css/,
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin([
      "BASE_URL",
      "IMAGE_PATH",
      "UPLOAD_PATH",
      "ENV"
    ]),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require("autoprefixer")({ browsers: ["last 2 versions"] }),
          require("postcss-nesting")
        ],
        proxy: {
          "/api/": {
            target: "http://192.168.33.10:8080/",
            secure: false
          },
          "/static/": {
            target: "http://192.168.33.10:8080/",
            secure: false
          }
        }
      }
    })
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
};
