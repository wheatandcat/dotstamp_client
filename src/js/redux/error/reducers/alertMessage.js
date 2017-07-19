// @flow
import * as types from "../../../constants/ActionTypes"

export type State = {
  message: string,
  warning: boolean
}

// 初期ステート設定
const initialState: State = {
  message: "",
  warning: false
}

export default function AlertMessage(state: State = initialState, action: any) {
  switch (action.type) {
    case types.INIT_ERROR_ALERT_MESSAGE: {
      return JSON.parse(JSON.stringify(initialState))
    }
    case types.CLOSE_ERROR_ALERT_MESSAGE: {
      state.warning = false

      return JSON.parse(JSON.stringify(state))
    }
    case types.OPEN_ERROR_ALERT_MESSAGE: {
      state.warning = true
      state.message = action.message

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
