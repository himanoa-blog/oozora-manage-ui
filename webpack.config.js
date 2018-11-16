const path = require("path");
const ENV = process.env.NODE_ENV || "development";
const DEV_PORT = process.env.PORT || 4444;
const webpack = require("webpack");
const { CheckerPlugin } = require('awesome-typescript-loader')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = (env, argv) => (
  {
    entry: {
      app: ["./src/index.tsx"]
    },
    output: {
      filename: "[name].bundle.js",
      chunkFilename: "[name].bundle.js",
      path: __dirname + "/dist",
      publicPath: "/"
    },
    devServer: {
      contentBase: "dist/",
      historyApiFallback: true,
      port: DEV_PORT
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", "jsx"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "awesome-typescript-loader"
        },
        { test: /\.(ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" }
      ]
    },
    devtool: argv.mode === "production" ? "" : "inline-source-map",
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false // set to true if you want JS source maps
        }),
      ]
    },
    plugins: [
      new CheckerPlugin(),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production"),
        API_HOST: process.env.PROD_APIHOST
      })
    ]
  }
)
