import * as types from "../../constants/ActionTypes"

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
