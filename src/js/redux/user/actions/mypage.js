import * as types from "../../../constants/ActionTypes"

/**
 * ユーザ名を変更する
 *
 * @param  {string} name ユーザ名
 * @return {object} アクション
 */
export function changeUserName(name) {
  return {type: types.CHANGE_USER_NAME, name: name}
}
