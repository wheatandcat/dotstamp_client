import * as types from "../../constants/ActionTypes"

/**
 * パスワードを設定する
 *
 * @param  {string} password
 * @return {object] アクション
 */
export function setPassword(password) {
    return {
        type: types.SAVE_PASSWORD,
        password: password,
    }
}
