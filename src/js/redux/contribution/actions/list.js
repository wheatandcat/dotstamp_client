import * as types from "../../../constants/ActionTypes"

/**
 * 次のページを表示する
 *
 * @return {object}  アクション
 */
export function next() {
  return { type: types.GET_CONTRIBUTION_LIST_NEXT }
}

/**
 * アイテムを削除する
 *
 * @param  {number} id 投稿ID
 * @return {object}  アクション
 */
export function deleteItem(id) {
  return { type: types.DELETE_CONTRIBUTION_LIST_ITEM, id }
}
