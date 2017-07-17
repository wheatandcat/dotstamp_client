// @flow
import * as types from "../../../constants/ActionTypes"

// 方向タイプ: 左
export const DIRECTION_LEFT = 1
// 方向タイプ: 右
export const DIRECTION_RIGHT = 2

// talkタイプ: テキスト型
export const TALK_TYPE_TEXT = 1
// talkタイプ: 画像型
export const TALK_TYPE_IMAGE = 2

/**
 * 本文を編集する
 */
export function setEditBody(
  priority: number,
  body: string,
  character: Object,
  directionType: number,
  talkType: number
) {
  return {
    type: types.SET_CONTRIBUTION_TALK_EDIT_BODY,
    priority,
    character,
    directionType,
    talekType: talkType,
    body
  }
}

/**
 * 本文を削除する
 */
export function deleteBody(priority: number) {
  return { type: types.DELETE_CONTRIBUTION_TALK_BODY, priority }
}

/**
 * 会話リストを設定する
 */
export function setTalkList(tags: Array<*>) {
  return { type: types.SET_CONTRIBUTION_TALK_LIST, tags }
}
