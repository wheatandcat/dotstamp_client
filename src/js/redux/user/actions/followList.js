import * as types from "../../../constants/ActionTypes"

/**
 * ページングする
 *
 * @param  {numbet} page ページ数
 * @param  {numbet} order 順番
 * @return {object} アクション
 */
export function paging(page, order) {
  return { type: types.PAGING_USER_FOLLOW_LIST, page: page, order: order }
}
