import * as types from "../../../constants/ActionTypes"

/**
 * エラーを表示する
 *
 * @param  {[object]} error エラー
 * @return {[object]} アクション
 */
export function showError(error) {
  return {
    type: types.SHOW_ERROR_MESSAGE,
    message: error.Message,
    errCode: error.ErrCode,
    show: true
  }
}

/**
 * エラーを閉じる
 *
 * @return {[object]} アクション
 */
export function closeError() {
  return { type: types.CLOSE_ERROR_MESSAGE, show: false }
}

/**
 * エラー報告を開く
 *
 * @return {[object]} アクション
 */
export function openBugReport() {
  return { type: types.OPEN_ERROR_BUG_REPORT, bugReport: true }
}
