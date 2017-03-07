import * as types from "../../constants/ActionTypes"

/**
 * 初期化する
 *
 * @return {[object]} アクション
 */
export function init() {
    return {
        type: types.INIT_QUESTION,
    }
}
