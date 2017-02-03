import {createStore, compose } from "redux"
import rootReducer from "../reducers/index"

import persistState, {mergePersistedState} from "redux-localstorage"
import adapter from "redux-localstorage/lib/adapters/localStorage"
import filter from "redux-localstorage-filter"

const localStorage = compose(
    filter(["loginAuth"])
)(adapter(window.localStorage))

const finalCreateStore = compose(
    persistState(localStorage, "auth")
)(createStore)

export default function configureStore() {
    const reducer = compose(mergePersistedState())(rootReducer)
    return finalCreateStore(reducer)
}
