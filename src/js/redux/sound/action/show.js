// @flow
import * as types from "../../../constants/ActionTypes"

/**
 * 音声本文を変更する
 *
 * @param  {number} priority 優先順位
 * @param  {string} bodySound 音声本文
 */
export function changeBodySound(priority: number, bodySound: string) {
  return {
    type: types.CHANGE_SOUND_SHOW_BODY_SOUND,
    priority,
    bodySound
  }
}

/**
 * ボイスタイプを変更する
 *
 * @param  {number} priority 優先順位
 * @param  {string} voiceType ボイスタイプ
 */
export function changeVoiceType(priority: number, voiceType: string) {
  return {
    type: types.CHANGE_SOUND_SHOW_VOICE_TYPE,
    priority,
    voiceType
  }
}

/**
 * 動画状態を変更する
 *
 * @param  {number} movieStatus 動画状態
 */
export function changeMovieStatus(movieStatus: number) {
  return {
    type: types.CHANGE_SOUND_SHOW_MOVIE_STATUS,
    movieStatus
  }
}

/**
 * 作成状態の監視をOFFにする
 */
export function offMovieMakeListener() {
  return { type: types.OFF_SOUND_SHOW_MOVIE_MAKE_LISTENER }
}

/**
 * ボイスリストを開く
 */
export function openVoiceList() {
  return { type: types.OPEN_SOUND_SHOW_VOICE_LIST }
}

/**
 * ボイスリストを閉じる
 */
export function closeVoiceList() {
  return { type: types.CLOSE_SOUND_SHOW_VOICE_LIST }
}
