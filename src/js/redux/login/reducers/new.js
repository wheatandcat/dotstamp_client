// @flow
import * as types from "../../../constants/ActionTypes"

export type State = {
  warning: boolean,
  message: string,
  open: boolean,
  text: string
}

const initialState: State = {
  warning: false,
  message: "",
  open: false,
  text: ""
}

export default function New(state: State = initialState, action: any) {
  switch (action.type) {
    case types.SET_LOGIN_USER: {
      state.warning = action.response.warning
      state.message = action.response.message

      if (!state.warning) {
        location.pathname = "/"
      }

      return JSON.parse(JSON.stringify(action.response))
    }
    case types.SET_LOGIN_USER_ALERT: {
      state.warning = true
      state.message = action.message

      return JSON.parse(JSON.stringify(state))
    }
    case types.OPEN_LOGIN_TERMS: {
      state.open = true
      state.text = action.response

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
