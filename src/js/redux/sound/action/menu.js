// @flow
import * as types from "../../../constants/ActionTypes"

/**
 * 作り直すを開く
 */
export function open() {
  return { type: types.OPEN_SOUND_MENU_REMAKE }
}

/**
 * 作り直すを閉じる
 */
export function close() {
  return { type: types.CLOSE_SOUND_MENU_REMAKE }
}

/**
 * アップロードを開く
 */
export function openUpload() {
  return { type: types.OPEN_SOUND_MENU_UPLOAD }
}

/**
 * アップロードを閉じる
 */
export function closeUpload() {
  return { type: types.CLOSE_SOUND_MENU_UPLOAD }
}

/**
 * 動画作成中にする
 */
export function makingMovie() {
  return { type: types.MAKING_SOUND_MENU_MOVIE }
}

/**
 * アップロード中にする
 */
export function uploading() {
  return { type: types.UPLOADING_SOUND_MENU_MOVIE }
}

/**
 * 情報を開く
 */
export function openInformation() {
  return { type: types.OPEN_SOUND_MENU_INFORMATION }
}

/**
 * 情報を閉じる
 */
export function closeInformation() {
  return { type: types.CLOSE_SOUND_MENU_INFORMATION }
}
