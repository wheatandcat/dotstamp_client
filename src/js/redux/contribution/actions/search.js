import * as types from "../../../constants/ActionTypes"

/**
 * ページングする
 *
 * @param  {string} search 検索
 * @param  {numbet} order 順番
 * @param  {numbet} page ページ数
 * @return {object} アクション
 */
export function paging(search, order, page) {
  return {
    type: types.PAGING_CONTRIBUTION_SEARCH_LIST,
    search: search,
    page: page,
    order: order
  }
}

/**
 * 順番を設定する
 *
 * @param  {numbet} order 順番
 * @return {object} アクション
 */
export function setOrder(order) {
  return {
    type: types.SET_CONTRIBUTION_SEARCH_ORDER,
    order: order
  }
}
