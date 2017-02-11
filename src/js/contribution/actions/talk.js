import * as types from "../../constants/ActionTypes"

// 方向タイプ: 左
export const DIRECTION_LEFT = 1
// 方向タイプ: 右
export const DIRECTION_RIGHT = 2

// talkタイプ: テキスト型
export const TALK_TYPE_TEXT = 1
// talkタイプ: 画像型
export const TALK_TYPE_IMAGE = 2

/**
 * 本文を編集する
 *
 * @param {number} priority 表示順
 * @param {string} body 本文
 * @param {object} character キャラクター
 * @param {number} directionType 方向タイプ
 * @param {number} talkType 会話タイプ
 * @return {[object]}  アクション
 */
export function setEditBody(priority, body, character, directionType, talkType) {
    return {
        type: types.SET_CONTRIBUTION_TALK_EDIT_BODY,
        priority: priority,
        character: character,
        directionType: directionType,
        talekType: talkType,
        body: body
    }
}

/**
 * 本文を削除する
 *
 * @param {number} priority 表示順
 * @return {[object]}  アクション
 */
export function deleteBody(priority) {
    return {
        type: types.DELETE_CONTRIBUTION_TALK_BODY,
        priority: priority
    }
}

/**
 * 会話リストを設定する
 *
 * @param {array} talkList 会話リスト
 * @return {[object]}  アクション
 */
export function setTalkList(talkList) {
    return {
        type: types.SET_CONTRIBUTION_TALK_LIST,
        talkList: talkList
    }
}
