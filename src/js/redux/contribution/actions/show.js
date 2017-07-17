// @flow
import * as types from "../../../constants/ActionTypes"

/**
 * 通報を開く
 */
export function openProblem() {
  return { type: types.OPEN_CONTRIBUTION_SHOW_PROBLEM }
}

/**
 * 通報を閉じる
 */
export function closeProblem() {
  return { type: types.CLOSE_CONTRIBUTION_SHOW_PROBLEM }
}

/**
 * 問題タイプを設定する
 */
export function setProblemType(problemType: number) {
  return {
    type: types.SET_CONTRIBUTION_SHOW_PROBLEM_TYPE,
    problemType
  }
}
