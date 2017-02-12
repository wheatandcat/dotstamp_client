import * as types from "../../constants/ActionTypes"

/**
 * アイコンを変更する
 *
 * @param  {string} url URL
 * @return {object} アクション
 */
export function setIcon(url) {
    return {
        type: types.SET_USER_MYPAGE_ICON,
        icon: url,
    }
}
