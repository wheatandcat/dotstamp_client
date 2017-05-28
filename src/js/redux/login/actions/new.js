import * as types from "../../../constants/ActionTypes"

/**
 * 警告する
 *
 * @param  {object} message メッセージ
 * @return {object] アクション
 */
export function alert(message) {
  return { type: types.SET_LOGIN_USER_ALERT, message: message }
}
