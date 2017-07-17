// @flow
import * as types from "../../../constants/ActionTypes"

/**
 * 初期化する
 */
export function init() {
  return { type: types.INIT_USER_CONTRBUTION_LIST }
}

/**
 * 投稿IDを設定する
 */
export function setContribution(contributionId: number) {
  return {
    type: types.SET_USER_CONTRBUTION_LIST,
    contributionId
  }
}

/**
 * 検索にヒットしたタイトルを設定する
 */
export function setTitleSearch(list: Array<*>) {
  return { type: types.SET_USER_CONTRBUTION_LIST_SEARCH, list }
}

/**
 * 表示状態を設定する
 */
export function setViewStatus(viewStatus: number) {
  return {
    type: types.SET_USER_CONTRBUTION_LIST_VIEW_STATUS,
    viewStatus
  }
}

/**
 * 削除確認を開く
 */
export function openDeleteConfirm() {
  return { type: types.OPEN_USER_CONTRBUTION_LIST_CONFIRM }
}

/**
 * 削除確認を閉じる
 */
export function closeDeleteConfirm() {
  return { type: types.CLOSE_USER_CONTRBUTION_LIST_CONFIRM }
}
