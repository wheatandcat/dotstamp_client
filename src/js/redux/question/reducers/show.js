import * as types from "../../../constants/ActionTypes"

// 初期ステート設定
const initialState = {
  Warning: false,
  Message: "",
  Send: false
}

export default function Show(state = initialState, action) {
  switch (action.type) {
  case types.INIT_QUESTION:
    {
      state.Send = false

      return JSON.parse(JSON.stringify(state))
    }
  case types.ADD_QUESTION:
    {
      state.Warning = action.response.Warning
      state.Message = action.response.Message
      state.Send = true

      return JSON.parse(JSON.stringify(state))
    }
  default:
    return state
  }
}
