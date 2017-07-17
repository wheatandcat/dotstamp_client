// @flow
import * as types from "../../../constants/ActionTypes"

/**
 * ページングする
 *
 * @param  {numbet} page ページ数
 * @param  {numbet} order 順番
 */
export function paging(page: number, order: number) {
  return { type: types.PAGING_USER_FOLLOW_LIST, page, order }
}
