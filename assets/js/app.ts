// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.css"
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import * as Turbolinks from "turbolinks"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"

const application = Application.start()
const context = require.context("./controllers", true, /\.ts$/)
application.load(definitionsFromContext(context))

Turbolinks.start()
