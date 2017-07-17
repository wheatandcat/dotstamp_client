// @flow
import * as types from "../../../constants/ActionTypes"

export function on() {
  return { type: types.ON_LOADING }
}

export function off() {
  return { type: types.OFF_LOADING }
}
