import * as types from "../../../constants/ActionTypes"

/**
 * 作り直すを開く
 *
 * @return {object} アクション
 */
export function open() {
  return {type: types.OPEN_SOUND_MENU_REMAKE}
}

/**
 * 作り直すを閉じる
 *
 * @return {object} アクション
 */
export function close() {
  return {type: types.CLOSE_SOUND_MENU_REMAKE}
}

/**
 * アップロードを開く
 *
 * @return {object} アクション
 */
export function openUpload() {
  return {type: types.OPEN_SOUND_MENU_UPLOAD}
}

/**
 * アップロードを閉じる
 *
 * @return {object} アクション
 */
export function closeUpload() {
  return {type: types.CLOSE_SOUND_MENU_UPLOAD}
}

/**
 * 動画作成中にする
 *
 * @return {object} アクション
 */
export function makingMovie() {
  return {type: types.MAKING_SOUND_MENU_MOVIE}
}

/**
 * アップロード中にする
 *
 * @return {object} アクション
 */
export function uploading() {
  return {type: types.UPLOADING_SOUND_MENU_MOVIE}
}

/**
 * 情報を開く
 *
 * @return {object} アクション
 */
export function openInformation() {
  return {type: types.OPEN_SOUND_MENU_INFORMATION}
}

/**
 * 情報を閉じる
 *
 * @return {object} アクション
 */
export function closeInformation() {
  return {type: types.CLOSE_SOUND_MENU_INFORMATION}
}
