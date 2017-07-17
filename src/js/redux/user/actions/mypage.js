// @flow
import * as types from "../../../constants/ActionTypes"

/**
 * ユーザ名を変更する
 *
 * @param  {string} name ユーザ名
 */
export function changeUserName(name: string) {
  return { type: types.CHANGE_USER_NAME, name }
}
