// @flow
import * as types from "../../../constants/ActionTypes"

type State = {
  fetch: boolean,
  warning: boolean,
  message: string
}

const initialState: State = {
  fetch: false,
  warning: false,
  message: ""
}

export default function Input(state: State = initialState, action: any) {
  switch (action.type) {
    case types.ADD_PASSWORD: {
      state.fetch = true
      state.warning = action.response.Warning
      state.message = action.response.Message

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
