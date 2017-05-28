/*global process*/
/*eslint no-console: ["error", { allow: ["log", "debug", "info", "warn"] }] */
/*global module*/
import "babel-polyfill"
import React from "react"
import { render } from "react-dom"
import { AppContainer } from "react-hot-loader"
import { history, store } from "./store/configureStore"
import Root from "./router"

if (process.env.ENV == "production") {
  console.debug = function() {}
  console.info = function() {}
  console.log = function() {}
  console.warn = function() {}
}

window.onhashchange = function() {
  window.scrollTo(0, 0)
}

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.querySelector("#root")
)

if (module.hot) {
  module.hot.accept("./router", () => {
    const NewRoot = require("./router").default
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.querySelector("#root")
    )
  })
}
