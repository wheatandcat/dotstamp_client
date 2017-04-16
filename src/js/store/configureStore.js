import {createStore, compose, applyMiddleware} from "redux"
import thunk from "redux-thunk"

import rootReducer from "../reducers/index"

import persistState, {mergePersistedState} from "redux-localstorage"
import adapter from "redux-localstorage/lib/adapters/localStorage"
import filter from "redux-localstorage-filter"

const localStorage = compose(
  filter(["loginAuth"])
)(adapter(window.localStorage))

const middlewares = [
  thunk,
]

const finalCreateStore = compose(
  persistState(localStorage, "auth"),
  applyMiddleware(...middlewares)
)(createStore)

export default function configureStore(initialState) {
  const store = compose(mergePersistedState())(rootReducer)
  return finalCreateStore(store, initialState)
}
