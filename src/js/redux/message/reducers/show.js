// @flow
import * as types from "../../../constants/ActionTypes"

export type State = {
  message: string,
  show: boolean,
  style: string
}

// 初期ステート設定
const initialState: State = {
  message: "",
  show: false,
  style: "success"
}

export default function Show(state: State = initialState, action: any) {
  switch (action.type) {
    case types.INIT_MESSAGE_SHOW: {
      return JSON.parse(JSON.stringify(initialState))
    }
    case types.OPEN_MESSAGE_SHOW: {
      state.message = action.message
      state.style = action.style
      state.show = true

      return JSON.parse(JSON.stringify(state))
    }
    case types.CLOSE_MESSAGE_SHOW: {
      state.show = false

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
