// @flow
import * as types from "../../../constants/ActionTypes"

/**
 * 初期化する
 */
export function init() {
  return { type: types.INIT_MESSAGE_SHOW }
}

/**
 * 文言を表示する
 */
export function message(message: string, style: number) {
  return { type: types.OPEN_MESSAGE_SHOW, message, style }
}

/**
 * 閉じる
 */
export function close() {
  return { type: types.CLOSE_MESSAGE_SHOW }
}
