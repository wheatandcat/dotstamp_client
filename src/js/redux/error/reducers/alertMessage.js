import * as types from "../../../constants/ActionTypes"

// 初期ステート設定
const initialState = {
  Message: "",
  Warning: false
}

export default function AlertMessage(state = initialState, action) {
  switch (action.type) {
  case types.INIT_ERROR_ALERT_MESSAGE:
    {
      return JSON.parse(JSON.stringify(initialState))
    }
  case types.CLOSE_ERROR_ALERT_MESSAGE:
    {
      state.Warning = false

      return JSON.parse(JSON.stringify(state))
    }
  case types.OPEN_ERROR_ALERT_MESSAGE:
    {
      state.Warning = true
      state.Message = action.message

      return JSON.parse(JSON.stringify(state))
    }
  default:
    return state
  }
}
