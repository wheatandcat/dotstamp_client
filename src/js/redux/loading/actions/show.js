import * as types from "../../../constants/ActionTypes"

/**
 * いれる
 *
 * @return {object] アクション
 */
export function on() {
  return { type: types.ON_LOADING }
}

/**
 * 切る
 *
 * @return {object] アクション
 */
export function off() {
  return { type: types.OFF_LOADING }
}
