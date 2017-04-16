import * as types from "../../../constants/ActionTypes"

/**
 * 本文を追加する
 *
 * @param {string} body 本文
 * @param {object} character キャラクター
 * @param {number} directionType 方向タイプ
 * @param {number} talkType 会話タイプ
 * @return {object} アクション
 */
export function addBody(body, character, directionType, talkType) {
    return {
        type: types.ADD_CONTRIBUTION_FORM_BODY,
        character: character,
        body: body,
        directionType: directionType,
        talkType: talkType
    }
}

/**
 * 本文を編集する
 *
 * @param {string} body 本文
 * @param {object} character キャラクター
 * @param {number} directionType 方向タイプ
 * @param {number} priority 優先度
 * @return {object} アクション
 */
export function editBody(body, character, directionType, priority) {
    return {
        type: types.EDIT_CONTRIBUTION_FORM_BODY,
        character: character,
        body: body,
        directionType: directionType,
        priority: priority
    }
}

/**
 * キャラクターを変更する
 *
 * @param  {object} character キャラクター
 * @return {object} アクション
 */
export function changeCharacter(character) {
    return {
        type: types.CHANGE_CONTRIBUTION_FORM_CHARACTER,
        character: character
    }
}

/**
 * 本文を変更する
 *
 * @param  {string} body 本文
 * @return {object} アクション
 */
export function changeBody(body) {
    return {
        type: types.CHANGE_CONTRIBUTION_FORM_BODY,
        body: body
    }
}

/**
 * タイトルを変更する
 *
 * @param  {string} title タイトル
 * @return {object} アクション
 */
export function changeTitle(title) {
    return {
        type: types.CHANGE_CONTRIBUTION_FORM_TITLE,
        title: title
    }
}

/**
 * タグを変更する
 *
 * @param  {string} title タイトル
 * @return {object} アクション
 */
export function changeTag(tag) {
    return {
        type: types.CHANGE_CONTRIBUTION_FORM_TAG,
        tag: tag
    }
}

/**
 * windowの高さ変更する
 *
 * @param  {number} height 高さ
 * @return {object} アクション
 */
export function changeHeight(height) {
    return {
        type: types.CHANGE_CONTRIBUTION_FORM_HEIGHT,
        height: height
    }
}

/**
 * 表示状態を設定する
 *
 * @param  {number} viewStatus 表示状態
 * @return {object} アクション
 */
export function setViewStatus(viewStatus) {
    return {
        type: types.SET_CONTRIBUTION_FORM_VIEW_STATUS,
        viewStatus: viewStatus
    }
}

/**
 * ヘルプを開く
 *
 * @return {object} アクション
 */
export function openHelp() {
    return {
        type: types.OPEN_CONTRIBUTION_FORM_HELP,
    }
}

/**
 * ヘルプを閉じる
 *
 * @return {object} アクション
 */
export function closeHelp() {
    return {
        type: types.CLOSE_CONTRIBUTION_FORM_HELP,
    }
}


/**
 * 編集をキャンセルする
 *
 * @return {object} アクション
 */
export function cancelEdit() {
    return {
        type: types.CANCEL_CONTRIBUTION_FROM_EDIT,
    }
}
