import * as types from "../../../constants/ActionTypes"

const initialState = {
  Warning: false,
  Message: "",
  Open: false,
  Text: ""
}

export default function New(state = initialState, action) {
  switch (action.type) {
    case types.SET_LOGIN_USER: {
      state.Warning = action.response.Warning
      state.Message = action.response.Message

      if (!state.Warning) {
        location.pathname = "/"
      }

      return JSON.parse(JSON.stringify(action.response))
    }
    case types.SET_LOGIN_USER_ALERT: {
      state.Warning = true
      state.Message = action.message

      return JSON.parse(JSON.stringify(state))
    }
    case types.OPEN_LOGIN_TERMS: {
      state.Open = true
      state.Text = action.response

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
