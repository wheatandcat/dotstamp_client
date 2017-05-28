import * as types from "../../../constants/ActionTypes"
import { VIEW_STATUS_PUBLIC } from "../../../constants/contribution"

// 初期ステート設定
const initialState = {
  id: null,
  title: "",
  body: "",
  tagList: [],
  viewStatus: VIEW_STATUS_PUBLIC,
  saveData: {
    title: "",
    body: "",
    viewStatus: VIEW_STATUS_PUBLIC
  },
  Sound: false,
  SoundFile: false
}

export default function Edit(state = initialState, action) {
  switch (action.type) {
    case types.GET_CONTRIBUTION_EDIT: {
      state.id = action.response.ID
      state.title = action.response.Title
      state.body = action.response.Body
      state.tagList = action.response.Tag
      state.viewStatus = action.response.ViewStatus
      state.saveData.title = action.response.Title
      state.saveData.body = JSON.stringify(action.response.Body)
      state.Sound = action.response.Sound
      state.SoundFile = action.response.SoundFile

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
