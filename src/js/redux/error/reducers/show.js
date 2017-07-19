// @flow
import * as types from "../../../constants/ActionTypes"

export type State = {
  message: string,
  errCode: number,
  show: boolean,
  bugReport: boolean,
  bugReported: boolean
}

const initialState: State = {
  message: "",
  errCode: 0,
  show: false,
  bugReport: false,
  bugReported: false
}

export default function Show(state: State = initialState, action: any) {
  switch (action.type) {
    case types.SHOW_ERROR_MESSAGE: {
      state.message = action.message
      state.errCode = action.errCode
      state.show = action.show

      return JSON.parse(JSON.stringify(state))
    }
    case types.CLOSE_ERROR_MESSAGE: {
      state.show = action.show

      return JSON.parse(JSON.stringify(state))
    }
    case types.OPEN_ERROR_BUG_REPORT: {
      state.bugReport = action.bugReport

      return JSON.parse(JSON.stringify(state))
    }
    case types.ADD_ERROR_BUG_REPORT: {
      state.bugReported = true

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
