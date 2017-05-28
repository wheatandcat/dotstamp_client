import * as types from "../../../constants/ActionTypes"

/**
 * 初期化する
 *
 * @return {object} アクション
 */
export function alertMessageInit() {
  return { type: types.INIT_ERROR_ALERT_MESSAGE }
}

/**
 * 警告文言を表示する
 *
 * @param  {string} message 文言
 * @return {object} アクション
 */
export function alertMessage(message) {
  return { type: types.OPEN_ERROR_ALERT_MESSAGE, message: message }
}

/**
 * 警告文言を閉じる
 *
 * @return {object} アクション
 */
export function closeAlert() {
  return { type: types.CLOSE_ERROR_ALERT_MESSAGE }
}
