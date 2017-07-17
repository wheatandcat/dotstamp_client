// @flow
import * as types from "../../../constants/ActionTypes"

/**
 * 次のページを表示する
 */
export function next() {
  return { type: types.GET_CONTRIBUTION_LIST_NEXT }
}

/**
 * アイテムを削除する
 */
export function deleteItem(id: number) {
  return { type: types.DELETE_CONTRIBUTION_LIST_ITEM, id }
}
