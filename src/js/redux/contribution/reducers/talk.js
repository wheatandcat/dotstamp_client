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

export type State = Array<Item>

const initialState: State = []

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
      const {
        priority,
        character,
        talkType,
        directionType
      } = action.receiveParam

      list[priority].body = action.response.path
      list[priority].character = character
      list[priority].talkType = talkType
      list[priority].directionType = directionType
      list[priority].edit = false

      state = list.concat()

      return state
    }
    case types.GET_CONTRIBUTION_EDIT: {
      list = action.response.body
      return list
    }

    case types.UPLOAD_CONTRIBUTION_FORM: {
      const { character, talkType, directionType } = action.receiveParam
      list.push(
        getAddBodyState(
          character,
          action.response.path,
          talkType,
          directionType,
          list.length
        )
      )

      state = list.concat()

      return state
    }
    case types.ADD_CONTRIBUTION_FORM_BODY: {
      const { character, body, talkType, directionType } = action
      list.push(
        getAddBodyState(character, body, talkType, directionType, list.length)
      )

      state = list.concat()

      return state
    }
    case types.EDIT_CONTRIBUTION_FORM_BODY: {
      const { priority, character, body, talkType, directionType } = action

      list[priority].body = replaceBody(body)
      list[priority].character = character
      list[priority].talkType = talkType
      list[priority].directionType = directionType
      list[priority].edit = false

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
