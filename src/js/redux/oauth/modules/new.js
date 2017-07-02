// @flow
import * as types from "../../../constants/ActionTypes"

export function alert(message: string) {
  return {
    type: types.SET_LOGIN_USER_ALERT,
    message
  }
}

export function save(email: string, password: string) {
  return {
    type: types.SET_LOGIN_AUTH,
    email,
    password
  }
}

const initialState = {
  email: "",
  password: ""
}

export default function newReducer(
  state: Object = initialState,
  action: Object
) {
  switch (action.type) {
    case types.SET_LOGIN_AUTH:
      return Object.assign({}, state, {
        email: action.email,
        password: action.action.email
      })
    default:
      return state
  }
}
