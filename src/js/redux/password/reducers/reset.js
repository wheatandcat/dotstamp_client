import * as types from "../../../constants/ActionTypes"

const initialState = {
  fetch: false,
  save: false,
  warning: false,
  message: ""
}

export default function Reset(state = initialState, action) {
  switch (action.type) {
  case types.CHECK_PASSWORD:
    {
      state.fetch = true
      state.warning = action.response.Warning
      state.message = action.response.Message

      return JSON.parse(JSON.stringify(state))
    }
  case types.SAVE_PASSWORD:
    {
      state.save = true
      state.warning = action.response.Warning
      state.message = action.response.Message

      return JSON.parse(JSON.stringify(state))
    }
  default:
    return state
  }
}
