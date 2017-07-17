// @flow
import * as types from "../../../constants/ActionTypes"

// 初期ステート設定
let list = []

type Item = {
  body: string,
  character: Object,
  directionType: number,
  talkType: number,
  priority: number,
  edit?: boolean
}

const initialState: Array<Item> = []

/**
 * 本文追加状態を取得する
 */
function getAddBodyState(
  character: Object,
  body: string,
  talkType: number,
  directionType: number,
  priority: number
): Item {
  return {
    body: replaceBody(body),
    character: character,
    directionType: directionType,
    talkType: talkType,
    edit: false,
    priority: priority
  }
}

function replaceBody(body) {
  return body.replace("%", "％").replace("&", "＆").replace(";", "；")
}

export default function Talk(
  state: Array<Item> = initialState,
  action: Object
) {
  switch (action.type) {
    case types.EDIT_CONTRIBUTION_FORM_BODY_IMAGE: {
      const priority = action.receiveParam.priority

      list[priority].body = action.response.path
      list[priority].character = action.receiveParam.character
      list[priority].talkType = action.receiveParam.talkType
      list[priority].directionType = action.receiveParam.directionType
      list[priority].edit = false

      state = list.concat()

      return state
    }
    case types.GET_CONTRIBUTION_EDIT: {
      list = action.response.body
      return list
    }

    case types.UPLOAD_CONTRIBUTION_FORM: {
      list.push(
        getAddBodyState(
          action.receiveParam.character,
          action.response.Path,
          action.receiveParam.talkType,
          action.receiveParam.directionType,
          list.length
        )
      )

      state = list.concat()

      return state
    }
    case types.ADD_CONTRIBUTION_FORM_BODY: {
      list.push(
        getAddBodyState(
          action.character,
          action.body,
          action.talkType,
          action.directionType,
          list.length
        )
      )

      state = list.concat()

      return state
    }
    case types.EDIT_CONTRIBUTION_FORM_BODY: {
      list[action.priority].body = replaceBody(action.body)
      list[action.priority].character = action.character
      list[action.priority].talkType = action.talkType
      list[action.priority].directionType = action.directionType
      list[action.priority].edit = false

      state = list.concat()

      return state
    }
    case types.SET_CONTRIBUTION_TALK_EDIT_BODY: {
      const editList = []
      for (const value of list) {
        value.edit = value.priority == action.priority
        editList.push(value)
      }

      state = editList.concat()

      return state
    }
    case types.DELETE_CONTRIBUTION_TALK_BODY: {
      list.splice(action.priority, 1)

      list.forEach((obj, key) => (obj.priority = key))
      list.forEach(obj => (obj.edit = false))
      state = list.concat()

      return state
    }
    case types.SET_CONTRIBUTION_TALK_LIST: {
      return action.talkList.concat()
    }
    case types.DELETE_CONTRIBUTION_SHOW:
    case types.INIT_CONTRIBUTION_NEW: {
      list = []
      return JSON.parse(JSON.stringify(initialState))
    }
    default:
      return state
  }
}
