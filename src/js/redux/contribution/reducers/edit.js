// @flow
import * as types from "../../../constants/ActionTypes"
import { VIEW_STATUS_PUBLIC } from "../../../constants/contribution"

export type State = {
  id: ?number,
  title: string,
  body: string,
  tags: Array<*>,
  viewStatus: number,
  saveData: {
    title: string,
    body: string,
    viewStatus: number
  },
  sound: boolean,
  soundFile: boolean
}

const initialState: State = {
  id: null,
  title: "",
  body: "",
  tags: [],
  viewStatus: VIEW_STATUS_PUBLIC,
  saveData: {
    title: "",
    body: "",
    viewStatus: VIEW_STATUS_PUBLIC
  },
  sound: false,
  soundFile: false
}

export default function Edit(state: State = initialState, action: any) {
  switch (action.type) {
    case types.GET_CONTRIBUTION_EDIT: {
      state.id = action.response.id
      state.title = action.response.title
      state.body = action.response.body
      state.tags = action.response.tags
      state.viewStatus = action.response.viewStatus
      state.saveData.title = action.response.title
      state.saveData.body = JSON.stringify(action.response.body)
      state.sound = action.response.sound
      state.soundFile = action.response.soundFile

      return JSON.parse(JSON.stringify(state))
    }
    case types.SAVE_CONTRIBUTION_FORM: {
      state.saveData.title = action.receiveParam.title
      state.saveData.body = action.receiveParam.body
      state.saveData.viewStatus = action.receiveParam.viewStatus

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
