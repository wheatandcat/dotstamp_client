import * as types from "../../../constants/ActionTypes"

/**
 * 初期化する
 *
 * @param  {bool} experience お試しフラグ
 * @return {object}  アクション
 */
export function init(experience) {
  return {
    type: types.INIT_CONTRIBUTION_NEW,
    experience: experience
  }
}
