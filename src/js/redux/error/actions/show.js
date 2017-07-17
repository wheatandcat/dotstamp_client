// @flow
import * as types from "../../../constants/ActionTypes"

/**
 * エラーを表示する
 */
export function showError(error: { message: string, errCode: number }) {
  return {
    type: types.SHOW_ERROR_MESSAGE,
    message: error.message,
    errCode: error.errCode,
    show: true
  }
}

/**
 * エラーを閉じる
 */
export function closeError() {
  return { type: types.CLOSE_ERROR_MESSAGE, show: false }
}

/**
 * エラー報告を開く
 */
export function openBugReport() {
  return { type: types.OPEN_ERROR_BUG_REPORT, bugReport: true }
}
