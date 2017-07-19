// @flow
import * as types from "../../../constants/ActionTypes"

export type State = {
  warning: boolean,
  message: string,
  send: boolean
}

const initialState: State = {
  warning: false,
  message: "",
  send: false
}

export default function Show(state: State = initialState, action: any) {
  switch (action.type) {
    case types.INIT_QUESTION: {
      state.send = false

      return JSON.parse(JSON.stringify(state))
    }
    case types.ADD_QUESTION: {
      state.warning = action.response.warning
      state.message = action.response.message
      state.send = true

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
