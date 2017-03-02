import * as types from "../../constants/ActionTypes"

/**
 * 音声本文を変更する
 *
 * @param  {number} priority 優先順位
 * @param  {string} bodySound 音声本文
 * @return {object} アクション
 */
export function changeBodySound(priority, bodySound) {
    return {
        type: types.CHANGE_SOUND_SHOW_BODY_SOUND,
        priority: priority,
        bodySound: bodySound,
    }
}

/**
 * ボイスタイプを変更する
 *
 * @param  {number} priority 優先順位
 * @param  {string} voiceType ボイスタイプ
 * @return {object} アクション
 */
export function changeVoiceType(priority, voiceType) {
    return {
        type: types.CHANGE_SOUND_SHOW_VOICE_TYPE,
        priority: priority,
        voiceType: voiceType,
    }
}
