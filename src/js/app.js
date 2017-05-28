import "babel-polyfill"
import React from "react"
import { render } from "react-dom"
import { AppContainer } from "react-hot-loader"
import { history, store } from "./store/configureStore"
import Root from "./router"

if (process.env.ENV === "production") {
  /* eslint no-console: ["error", { allow: ["log", "debug", "info", "warn"] }] */
  console.debug = () => {}
  console.info = () => {}
  console.log = () => {}
  console.warn = () => {}
}

window.onhashchange = () => {
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
    /* eslint-disable global-require */
    const NewRoot = require("./router").default
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.querySelector("#root")
    )
  })
}
