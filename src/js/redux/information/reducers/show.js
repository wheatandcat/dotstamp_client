import * as types from "../../../constants/ActionTypes"

const initialState = {
  Title: "",
  Body: ""
}

const title = {
  terms: "利用規約",
  clientLicense: "Client License",
  serverLicense: "server License",
  ansibleLicense: "infrastructure License"
}

export default function Show(state = initialState, action) {
  switch (action.type) {
    case types.GET_JSON: {
      state.Title = title[action.receiveParam.fileName]
      state.Body = action.response

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
