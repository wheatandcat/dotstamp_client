import * as types from "../../constants/ActionTypes"

/**
 * 投稿IDを設定する
 *
 * @return {[object]} アクション
 */
export function loginUser() {
    return {
        type: types.SET_LOGIN_USER
    }
}
