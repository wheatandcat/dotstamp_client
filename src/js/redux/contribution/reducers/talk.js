// @flow
import * as types from "../../../constants/ActionTypes"

// 初期ステート設定
let list = []

const initialState = []

/**
 * 本文追加状態を取得する
 *
 * @param  {object} character キャラクター
 * @param  {string} body  本文
 * @param  {number} talkType  会話タイプ
 * @param  {number} directionType  方向タイプ
 * @param  {number} priority  優先順位
 * @return {object} 状態
 */
function getAddBodyState(character, body, talkType, directionType, priority) {
  return {
    Body: replaceBody(body),
    Character: character,
    DirectionType: directionType,
    TalkType: talkType,
    Edit: false,
    Priority: priority
  }
}

function replaceBody(body) {
  return body.replace("%", "％").replace("&", "＆").replace(";", "；")
}

export default function Talk(state: Array<*> = initialState, action: Object) {
  switch (action.type) {
    case types.EDIT_CONTRIBUTION_FORM_BODY_IMAGE: {
      const priority = action.receiveParam.Priority

      list[priority].Body = action.response.Path
      list[priority].Character = action.receiveParam.Character
      list[priority].TalkType = action.receiveParam.TalkType
      list[priority].DirectionType = action.receiveParam.DirectionType
      list[priority].Edit = false

      state = list.concat()

      return state
    }
    case types.GET_CONTRIBUTION_EDIT: {
      list = action.response.Body
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
      list[action.priority].Body = replaceBody(action.body)
      list[action.priority].Character = action.character
      list[action.priority].TalkType = action.talkType
      list[action.priority].DirectionType = action.directionType
      list[action.priority].Edit = false

      state = list.concat()

      return state
    }
    case types.SET_CONTRIBUTION_TALK_EDIT_BODY: {
      const editList = []
      for (const value of list) {
        value.Edit = value.Priority == action.priority
        editList.push(value)
      }

      state = editList.concat()

      return state
    }
    case types.DELETE_CONTRIBUTION_TALK_BODY: {
      list.splice(action.priority, 1)

      list.forEach((obj, key) => (obj.Priority = key))
      list.forEach(obj => (obj.Edit = false))
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
