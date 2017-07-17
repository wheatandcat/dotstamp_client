// @flow
import * as types from "../../../constants/ActionTypes"

/**
 * 警告する
 */
export function alert(message: string) {
  return { type: types.SET_LOGIN_USER_ALERT, message }
}
