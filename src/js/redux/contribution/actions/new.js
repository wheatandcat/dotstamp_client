// @flow
import * as types from "../../../constants/ActionTypes"

/**
 * 初期化する
 */
export function init(experience: boolean) {
  return {
    type: types.INIT_CONTRIBUTION_NEW,
    experience
  }
}
