// @flow
import * as types from "../../../constants/ActionTypes"

export type State = {
  login: boolean,
  name: string
}

const initialState: State = {
  login: false,
  name: ""
}

export default function Auth(state: State = initialState, action: any) {
  switch (action.type) {
    case types.SET_LOGIN_AUTH: {
      state.login = action.response.login
      state.name = action.response.name

      return JSON.parse(JSON.stringify(state))
    }
    case types.LOGOUT_LOGIN_AUTH: {
      state.login = false
      state.name = ""

      location.hash = "/"
      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
