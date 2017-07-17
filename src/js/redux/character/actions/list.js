// @flow
import * as types from "../../../constants/ActionTypes"

/**
 * アイコンを設定する
 */
export function setIcon(id: number) {
  return {
    type: types.SET_CHARACTER_LIST,
    icon: id
  }
}

/**
 * ボイスタイプを設定する
 */
export function setVoiceType(voiceType: number) {
  return {
    type: types.SET_CHARACTER_VOICE_TYPE,
    voiceType
  }
}

/**
 * 初期化する
 */
export function init() {
  return { type: types.INIT_CHARACTER_LIST }
}

/**
 * デフォルトを設定する
 */
export function setDefaultList() {
  return { type: types.SET_CHARACTER_LIST_DEFAULT }
}
