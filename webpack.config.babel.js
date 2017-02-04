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

// 環境設定(デフォルト:develop)
var env = (process.env.NODE_ENV == undefined) ? "development" : process.env.NODE_ENV
loadenv("./nodeConfig/." + env)

var cssLoaderConfig = [
    "style",
    "css?modules",
    "postcss"
]

module.exports = [
    {
        context: __dirname + "/src",
        entry: {
            "js/application": "./js/app",
            "html": "./index.html"
        },
        output: {
            path: __dirname + "/dist",
            filename: "js/bundle.js"
        },
        resolve: {
            extensions: ["", ".js", ".jsx", ".css"]
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
                },
                {
                    test: /\.css$/,
                    include: /css/,
                    loaders: cssLoaderConfig,
                },
                {
                    test: /\.html$/,
                    loader: "file?name=[name].[ext]"
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                API_KEY: JSON.stringify("KEY:XXX-XXX"),
                BASE_URL: JSON.stringify(process.env.BASE_URL),
                IMAGE_PATH: JSON.stringify(process.env.IMAGE_PATH),
                UPLOAD_PATH: JSON.stringify(process.env.UPLOAD_PATH)
            })
        ],
        postcss: () => {
            return [
                cssimport,
                cssnext,
                precss,
                sorting,
            ]
        },
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
        }
    },
]
