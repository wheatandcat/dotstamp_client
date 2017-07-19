// @flow
import * as types from "../../../constants/ActionTypes"

export type State = {
  title: string,
  body: string
}

const initialState: State = {
  title: "",
  body: ""
}

const title = {
  terms: "利用規約",
  clientLicense: "Client License",
  serverLicense: "server License",
  ansibleLicense: "infrastructure License"
}

export default function Show(state: State = initialState, action: any) {
  switch (action.type) {
    case types.GET_JSON: {
      state.title = title[action.receiveParam.fileName]
      state.body = action.response

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
