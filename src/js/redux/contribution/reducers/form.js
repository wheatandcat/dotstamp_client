// @flow
import { DIRECTION_LEFT } from "../actions/talk"
import * as types from "../../../constants/ActionTypes"
import { VIEW_STATUS_PUBLIC } from "../../../constants/contribution"

export type State = {
  edit: boolean,
  tag: string,
  tags: Array<*>,
  title: string,
  body: string,
  priority: ?number,
  character: {
    characterID: number,
    fileName: string,
    id: number,
    priority: number,
    voiceType: number
  },
  directionType: number,
  height: number,
  boardScroll: boolean,
  viewStatus: number,
  warning: boolean,
  message: string,
  help: boolean,
  editTmp: {
    body: string
  },
  experience: boolean
}

const initialState: State = {
  edit: false,
  tag: "",
  tags: [],
  title: "",
  body: "",
  priority: null,
  character: {
    characterID: 0,
    fileName: "",
    id: 0,
    priority: 0,
    voiceType: 0
  },
  directionType: DIRECTION_LEFT,
  height: 450,
  boardScroll: false,
  viewStatus: VIEW_STATUS_PUBLIC,
  warning: false,
  message: "",
  help: false,
  editTmp: {
    body: ""
  },
  experience: false
}

const onBoardScrollActionTypeList = [
  types.ADD_CONTRIBUTION_FORM_BODY,
  types.UPLOAD_CONTRIBUTION_FORM
]

export default function Form(state: State = initialState, action: any) {
  if (onBoardScrollActionTypeList.indexOf(action.type) != -1) {
    state.boardScroll = true
    state.body = ""
  } else {
    state.boardScroll = false
  }

  switch (action.type) {
    case types.ADD_CONTRIBUTION_FORM_BODY: {
      state.boardScroll = true
      state.body = ""

      return JSON.parse(JSON.stringify(state))
    }
    case types.CANCEL_CONTRIBUTION_FROM_EDIT:
    case types.EDIT_CONTRIBUTION_FORM_BODY: {
      state.edit = false
      // 保持していた入力に戻す
      state.body = state.editTmp.body
      state.editTmp.body = ""
      state.priority = null

      return JSON.parse(JSON.stringify(state))
    }
    case types.CHANGE_CONTRIBUTION_FORM_CHARACTER: {
      state.character = action.character

      return JSON.parse(JSON.stringify(state))
    }
    case types.SET_CHARACTER_LIST_DEFAULT: {
      state.character = {
        characterID: 0,
        fileName: "default1.png",
        id: 0,
        priority: 0,
        voiceType: 0
      }

      return JSON.parse(JSON.stringify(state))
    }
    case types.GET_CHARACTER_LIST: {
      if (action.response.images.length > 0) {
        state.character = action.response.images[0]
      } else {
        state.character = {
          characterID: 0,
          fileName: "default1.png",
          id: 0,
          priority: 0,
          voiceType: 0
        }
      }

      return JSON.parse(JSON.stringify(state))
    }
    case types.CHANGE_CONTRIBUTION_FORM_BODY: {
      state.body = action.body

      return JSON.parse(JSON.stringify(state))
    }
    case types.DELETE_CONTRIBUTION_TALK_BODY: {
      state.edit = false
      state.body = ""
      state.priority = null

      return JSON.parse(JSON.stringify(state))
    }
    case types.CHANGE_CONTRIBUTION_FORM_TITLE: {
      state.title = action.title

      return JSON.parse(JSON.stringify(state))
    }
    case types.CHANGE_CONTRIBUTION_FORM_TAG: {
      state.tag = action.tag

      return JSON.parse(JSON.stringify(state))
    }
    case types.SET_CONTRIBUTION_TALK_EDIT_BODY: {
      state.edit = true

      // 現在の入力を保持
      state.editTmp.body = state.body

      state.body = action.body
      state.priority = action.priority

      return JSON.parse(JSON.stringify(state))
    }
    case types.GET_CONTRIBUTION_EDIT: {
      state.title = action.response.title
      state.tags = action.response.tags
      state.viewStatus = action.response.viewStatus

      state.experience = false

      return JSON.parse(JSON.stringify(state))
    }
    case types.CHANGE_CONTRIBUTION_FORM_HEIGHT: {
      state.height = action.height

      return JSON.parse(JSON.stringify(state))
    }
    case types.NEW_CONTRIBUTION_FORM: {
      location.pathname = `/contribution/edit/${action.response}`
      return JSON.parse(JSON.stringify(state))
    }
    case types.SET_CONTRIBUTION_FORM_VIEW_STATUS: {
      state.viewStatus = action.viewStatus

      return JSON.parse(JSON.stringify(state))
    }
    case types.DELETE_CONTRIBUTION_TAG:
    case types.ADD_CONTRIBUTION_TAG: {
      state.tags = action.response.tags

      return JSON.parse(JSON.stringify(state))
    }
    case types.INIT_CONTRIBUTION_NEW: {
      state.experience = action.experience
      state.title = ""
      state.tag = ""
      state.tags = []

      return JSON.parse(JSON.stringify(state))
    }
    case types.ADD_CONTRIBUTION_FORM_SOUND: {
      const id = action.receiveParam.userContributionId

      location.pathname = `/sound/show/${id}`
      return JSON.parse(JSON.stringify(initialState))
    }
    case types.OPEN_CONTRIBUTION_FORM_HELP: {
      state.help = true

      return JSON.parse(JSON.stringify(state))
    }
    case types.CLOSE_CONTRIBUTION_FORM_HELP: {
      state.help = false

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
