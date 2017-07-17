// @flow
import * as types from "../../../constants/ActionTypes"

/**
 * 本文を追加する
 */
export function addBody(
  body: string,
  character: Object,
  directionType: number,
  talkType: number
) {
  return {
    type: types.ADD_CONTRIBUTION_FORM_BODY,
    character,
    body,
    directionType,
    talkType
  }
}

/**
 * 本文を編集する
 */
export function editBody(
  body: string,
  character: Object,
  directionType: number,
  priority: number
) {
  return {
    type: types.EDIT_CONTRIBUTION_FORM_BODY,
    character,
    body,
    directionType,
    priority
  }
}

/**
 * キャラクターを変更する
 */
export function changeCharacter(character: Object) {
  return {
    type: types.CHANGE_CONTRIBUTION_FORM_CHARACTER,
    character
  }
}

/**
 * 本文を変更する
 */
export function changeBody(body: string) {
  return {
    type: types.CHANGE_CONTRIBUTION_FORM_BODY,
    body
  }
}

/**
 * タイトルを変更する
 */
export function changeTitle(title: string) {
  return {
    type: types.CHANGE_CONTRIBUTION_FORM_TITLE,
    title
  }
}

/**
 * タグを変更する
 */
export function changeTag(tag: string) {
  return {
    type: types.CHANGE_CONTRIBUTION_FORM_TAG,
    tag
  }
}

/**
 * windowの高さ変更する
 */
export function changeHeight(height: number) {
  return {
    type: types.CHANGE_CONTRIBUTION_FORM_HEIGHT,
    height
  }
}

/**
 * 表示状態を設定する
 */
export function setViewStatus(viewStatus: number) {
  return {
    type: types.SET_CONTRIBUTION_FORM_VIEW_STATUS,
    viewStatus
  }
}

/**
 * ヘルプを開く
 */
export function openHelp() {
  return { type: types.OPEN_CONTRIBUTION_FORM_HELP }
}

/**
 * ヘルプを閉じる
 */
export function closeHelp() {
  return { type: types.CLOSE_CONTRIBUTION_FORM_HELP }
}

/**
 * 編集をキャンセルする
 */
export function cancelEdit() {
  return { type: types.CANCEL_CONTRIBUTION_FROM_EDIT }
}
