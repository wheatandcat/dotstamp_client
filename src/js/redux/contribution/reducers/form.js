import {DIRECTION_LEFT} from "../actions/talk"
import * as types from "../../../constants/ActionTypes"
import {VIEW_STATUS_PUBLIC} from "../../../constants/contribution"

const initialState = {
  edit: false,
  tag: "",
  tagList: [],
  title: "",
  body: "",
  priority: null,
  character: {
    FileName: ""
  },
  directionType: DIRECTION_LEFT,
  height: 450,
  boardScroll: false,
  viewStatus: VIEW_STATUS_PUBLIC,
  Warning: false,
  Message: "",
  help: false,
  EditTmp: {
    Body: ""
  },
  Experience: false
}

var onBoardScrollActionTypeList = [
  types.ADD_CONTRIBUTION_FORM_BODY,
  types.UPLOAD_CONTRIBUTION_FORM
]

export default function Form(state = initialState, action) {
  if (onBoardScrollActionTypeList.indexOf(action.type) != -1) {
    state.boardScroll = true
    state.body = ""
  } else {
    state.boardScroll = false
  }

  switch (action.type) {
  case types.CANCEL_CONTRIBUTION_FROM_EDIT:
  case types.EDIT_CONTRIBUTION_FORM_BODY:
    {
      state.edit = false
      // 保持していた入力に戻す
      state.body = state.EditTmp.Body
      state.EditTmp.Body = ""
      state.priority = null

      return JSON.parse(JSON.stringify(state))
    }
  case types.CHANGE_CONTRIBUTION_FORM_CHARACTER:
    {
      state.character = action.character

      return JSON.parse(JSON.stringify(state))
    }
  case types.SET_CHARACTER_LIST_DEFAULT:
    {
      state.character = {
        CharacterID: 0,
        FileName: "default1.png",
        ID: 0,
        Priority: 0,
        VoiceType: 0
      }

      return JSON.parse(JSON.stringify(state))
    }
  case types.GET_CHARACTER_LIST:
    {
      if (action.response.Image.length > 0) {
        state.character = action.response.Image[0]
      } else {
        state.character = {
          CharacterID: 0,
          FileName: "default1.png",
          ID: 0,
          Priority: 0,
          VoiceType: 0
        }
      }

      return JSON.parse(JSON.stringify(state))
    }
  case types.CHANGE_CONTRIBUTION_FORM_BODY:
    {
      state.body = action.body

      return JSON.parse(JSON.stringify(state))
    }
  case types.DELETE_CONTRIBUTION_TALK_BODY:
    {
      state.edit = false
      state.body = ""
      state.priority = null

      return JSON.parse(JSON.stringify(state))
    }
  case types.CHANGE_CONTRIBUTION_FORM_TITLE:
    {
      state.title = action.title

      return JSON.parse(JSON.stringify(state))
    }
  case types.CHANGE_CONTRIBUTION_FORM_TAG:
    {
      state.tag = action.tag

      return JSON.parse(JSON.stringify(state))
    }
  case types.SET_CONTRIBUTION_TALK_EDIT_BODY:
    {
      state.edit = true

      // 現在の入力を保持
      state.EditTmp.Body = state.body

      state.body = action.body
      state.priority = action.priority

      return JSON.parse(JSON.stringify(state))
    }
  case types.GET_CONTRIBUTION_EDIT:
    {
      state.title = action.response.Title
      state.tagList = action.response.Tag
      state.viewStatus = action.response.ViewStatus

      state.Experience = false

      return JSON.parse(JSON.stringify(state))
    }
  case types.CHANGE_CONTRIBUTION_FORM_HEIGHT:
    {
      state.height = action.height

      return JSON.parse(JSON.stringify(state))
    }
  case types.NEW_CONTRIBUTION_FORM:
    {
      location.href = "/#/contribution/edit/" + action.response
      return JSON.parse(JSON.stringify(state))
    }
  case types.SET_CONTRIBUTION_FORM_VIEW_STATUS:
    {
      state.viewStatus = action.viewStatus

      return JSON.parse(JSON.stringify(state))
    }
  case types.DELETE_CONTRIBUTION_TAG:
  case types.ADD_CONTRIBUTION_TAG:
    {
      state.tagList = action.response.Tag

      return JSON.parse(JSON.stringify(state))
    }
  case types.INIT_CONTRIBUTION_NEW:
    {
      state.Experience = action.experience
      state.title = ""
      state.tag = ""
      state.tagList = []

      return JSON.parse(JSON.stringify(state))
    }
  case types.ADD_CONTRIBUTION_FORM_SOUND:
    {
      let id = action.receiveParam.userContributionId

      location.href = "/#/sound/show/" + id
      return JSON.parse(JSON.stringify(initialState))
    }
  case types.OPEN_CONTRIBUTION_FORM_HELP:
    {
      state.help = true

      return JSON.parse(JSON.stringify(state))
    }
  case types.CLOSE_CONTRIBUTION_FORM_HELP:
    {
      state.help = false

      return JSON.parse(JSON.stringify(state))
    }
  default:
    return state
  }
}
