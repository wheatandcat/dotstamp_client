import * as types from "../../../constants/ActionTypes"

/**
 * 通報を開く
 *
 * @return {object} アクション
 */
export function openProblem() {
  return {type: types.OPEN_CONTRIBUTION_SHOW_PROBLEM}
}

/**
 * 通報を閉じる
 *
 * @return {object} アクション
 */
export function closeProblem() {
  return {type: types.CLOSE_CONTRIBUTION_SHOW_PROBLEM}
}

/**
 * 問題タイプを設定する
 *
 * @param  {numbet} problemType 問題タイプ
 * @return {object} アクション
 */
export function setProblemType(problemType) {
  return {type: types.SET_CONTRIBUTION_SHOW_PROBLEM_TYPE, problemType: problemType}
}
