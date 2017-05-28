import { createStore, compose, applyMiddleware } from "redux"
import { routerMiddleware } from "react-router-redux"
import thunk from "redux-thunk"
import { createBrowserHistory } from "history"
import rootReducer from "../reducers/index"

import persistState from "redux-localstorage"
import adapter from "redux-localstorage/lib/adapters/localStorage"
import filter from "redux-localstorage-filter"

export const history = createBrowserHistory()

const router = routerMiddleware(history)

const localStorage = compose(filter(["loginAuth"]))(
  adapter(window.localStorage)
)

const middlewares = [thunk, router]

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(...middlewares),
    persistState(localStorage, "auth")
  )

  const store = createStore(rootReducer, initialState, enhancer)

  return store
}

export const store = configureStore()
