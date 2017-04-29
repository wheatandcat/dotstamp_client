import * as types from "../../../constants/ActionTypes"

const initialState = {
  Login: false,
  Name: ""
}

export default function Auth(state = initialState, action) {
  switch (action.type) {
  case types.SET_LOGIN_AUTH:
    {
      state.Login = action.response.Login
      state.Name  = action.response.Name

      return JSON.parse(JSON.stringify(state))
    }
  case types.LOGOUT_LOGIN_AUTH:
    {
      state.Login = false
      state.Name = ""

      location.hash = "/"
      return JSON.parse(JSON.stringify(state))
    }
  default:
    return state
  }
}
