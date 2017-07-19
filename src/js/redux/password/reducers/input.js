// @flow
import * as types from "../../../constants/ActionTypes"

export type State = {
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
      const { warning, message } = action.response

      return Object.assign({}, state, {
        fetch: true,
        warning,
        message
      })
    }
    default:
      return state
  }
}
