import * as types from "../../constants/ActionTypes"

/**
 * アイコンを設定する
 * @param {int} id アイコンID
 * @return {object}  アクション
 */
export function setIcon(id) {
    return {
        type: types.SET_CHARACTER_LIST,
        icon: id
    }
}

/**
 * ボイスタイプを設定する
 * @param {int} voiceType ボイスタイプ
 * @return {object}  アクション
 */
export function setVoiceType(voiceType) {
    return {
        type: types.SET_CHARACTER_VOICE_TYPE,
        voiceType: voiceType
    }
}

/**
 * 初期化する
 * @return {object}  アクション
 */
export function init() {
    return {
        type: types.INIT_CHARACTER_LIST,
    }
}


/**
 * デフォルトを設定する
 * @return {object}  アクション
 */
export function setDefaultList() {
    return {
        type: types.SET_CHARACTER_LIST_DEFAULT,
    }
}
