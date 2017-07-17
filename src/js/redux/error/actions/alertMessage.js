// @flow
import * as types from "../../../constants/ActionTypes"

/**
 * 初期化する
 */
export function alertMessageInit() {
  return { type: types.INIT_ERROR_ALERT_MESSAGE }
}

/**
 * 警告文言を表示する
 */
export function alertMessage(message: string) {
  return { type: types.OPEN_ERROR_ALERT_MESSAGE, message }
}

/**
 * 警告文言を閉じる
 */
export function closeAlert() {
  return { type: types.CLOSE_ERROR_ALERT_MESSAGE }
}
