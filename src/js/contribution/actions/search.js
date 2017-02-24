import * as types from "../../constants/ActionTypes"

/**
 * ページングする
 *
 * @param  {string} search 検索
 * @param  {numbet} page ページ数
 * @param  {numbet} order 順番
 * @return {object} アクション
 */
export function paging(search, page, order) {
    return {
        type: types.PAGING_CONTRIBUTION_SEARCH_LIST,
        search: search,
        page: page,
        order: order,
    }
}
