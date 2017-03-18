import * as types from "../../constants/ActionTypes"

/**
 * 初期化する
 *
 * @return {object} アクション
 */
export function init() {
    return {
        type: types.INIT_USER_CONTRBUTION_LIST,
    }
}

/**
 * 投稿IDを設定する
 *
 * @param  {array} contributionId 投稿ID
 * @return {object} アクション
 */
export function setContribution(contributionId) {
    return {
        type: types.SET_USER_CONTRBUTION_LIST,
        contributionId: contributionId
    }
}

/**
 * 検索タイトルを設定する
 *
 * @param  {string} list リスト
 * @return {object} アクション
 */
export function setTitleSearch(list) {
    return {
        type: types.SET_USER_CONTRBUTION_LIST_SEARCH,
        list: list
    }
}

/**
 * 表示状態を設定する
 *
 * @param  {number} viewStatus 表示状態
 * @return {object} アクション
 */
export function setViewStatus(viewStatus) {
    return {
        type: types.SET_USER_CONTRBUTION_LIST_VIEW_STATUS,
        viewStatus: viewStatus
    }
}

/**
 * 削除確認を開く
 *
 * @return {object} アクション
 */
export function openDeleteConfirm() {
    return {
        type: types.OPEN_USER_CONTRBUTION_LIST_CONFIRM,
    }
}

/**
 * 削除確認を閉じる
 *
 * @return {object} アクション
 */
export function closeDeleteConfirm() {
    return {
        type: types.CLOSE_USER_CONTRBUTION_LIST_CONFIRM,
    }
}
