// @flow
import * as types from "../../../constants/ActionTypes"

/**
 * ページングする
 */
export function paging(search: string, order: number, page: number) {
  return {
    type: types.PAGING_CONTRIBUTION_SEARCH_LIST,
    search,
    page,
    order
  }
}

/**
 * 順番を設定する
 */
export function setOrder(order: number) {
  return {
    type: types.SET_CONTRIBUTION_SEARCH_ORDER,
    order
  }
}
