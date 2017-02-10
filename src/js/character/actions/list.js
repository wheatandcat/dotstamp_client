import * as types from "../../constants/ActionTypes"

/**
 * アイコンを設定する
 * @param {int} id アイコンID
 * @return {object}  アクション
 */
export function setIcon(id) {
    return {
        type: types.SET_CHARACTER_LIST,
        icon: id
    }
}
