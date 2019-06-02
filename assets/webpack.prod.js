const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const glob = require("glob-all")
const path = require("path")
const PurgecssPlugin = require("purgecss-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
  },
  plugins: [
    new PurgecssPlugin({
      paths: glob.sync([
        path.join("./js/**/*.ts"),
        path.join("../lib/star_web/templates/**/*.eex"),
      ]),
      extractors: [
        {
          extractor: class {
            static extract(content) {
              return content.match(/[A-z0-9-:\/]+/g)
            }
          },
          extensions: ["ts", "eex"],
        },
      ],
    }),
  ],
})
