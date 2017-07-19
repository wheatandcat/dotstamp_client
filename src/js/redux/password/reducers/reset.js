// @flow
import * as types from "../../../constants/ActionTypes"

export type State = {
  fetch: boolean,
  save: boolean,
  warning: boolean,
  message: string
}

const initialState: State = {
  fetch: false,
  save: false,
  warning: false,
  message: ""
}

export default function Reset(state: State = initialState, action: any) {
  switch (action.type) {
    case types.CHECK_PASSWORD: {
      state.fetch = true
      state.warning = action.response.warning
      state.message = action.response.message

      return JSON.parse(JSON.stringify(state))
    }
    case types.SAVE_PASSWORD: {
      state.save = true
      state.warning = action.response.warning
      state.message = action.response.message

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
