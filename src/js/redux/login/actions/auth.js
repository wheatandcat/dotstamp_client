import * as types from "../../../constants/ActionTypes"

/**
 * 認証する
 *
 * @param  {object} user ユーザ
 * @return {object] アクション
 */
export function auth(user) {
  return {type: types.SET_LOGIN_AUTH, Login: user.Login, Name: user.Name}
}

/**
 * ログアウトする
 *
 * @return {object} アクション
 */
export function logout() {
  return {type: types.LOGOUT_LOGIN_AUTH}
}
