import * as types from "../../../constants/ActionTypes"

/**
 * 初期化する
 *
 * @return {object} アクション
 */
export function init() {
    return {
        type: types.INIT_MESSAGE_SHOW,
    }
}

/**
 * 文言を表示する
 *
 * @param  {string} message 文言
 * @param  {number} style スタイル
 * @return {object} アクション
 */
export function message(message, style) {
    return {
        type: types.OPEN_MESSAGE_SHOW,
        message: message,
        style: style,
    }
}

/**
 * 閉じる
 *
 * @return {object} アクション
 */
export function close() {
    return {
        type: types.CLOSE_MESSAGE_SHOW,
    }
}
