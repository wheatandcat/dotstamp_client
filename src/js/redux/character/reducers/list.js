import * as types from "../../../constants/ActionTypes"
import { IMAGE_DISPLAY_TYPE_CHARACTER } from "../../../utils/image"

// 初期ステート設定
const initialState = {
    list: [],
    icon: {
        id: 0,
        fileName: "default1.png",
        select: 0
    },
    imageType: IMAGE_DISPLAY_TYPE_CHARACTER,
    load: false,
    VoiceType:{},
    DefaultIcon: false,
}

/**
 * アイコンを指定した状態を取得する
 *
 * @param  {object} state 状態
 * @param  {number} id    ID
 * @return {object} 状態
 */
function getSelectIconState(state, id) {
    let count = 0
    for (let value of state.list) {
        if (value.ID == id) {
            state.icon = {
                id: value.ID,
                fileName: value.FileName,
                select: count
            }
        }
        count++
    }
    return state
}

/**
 * デフォルメキャラクターリストを取得する
 *
 * @return {array[]} キャラクターリスト
 */
function getDefaultCharacterList() {
    let hash = location.hash
    if (hash.indexOf("contribution/new") == -1 && hash.indexOf("contribution/experience") == -1 && hash.indexOf("contribution/edit") == -1) {
        return []
    }

    let list = []
    let max = 9

    for(var i = 1; i < max; i++) {
        list.push({
            CharacterID: 0,
            FileName: "default"+ i +".png",
            ID: 0,
            Priority: 0,
            VoiceType: 0,
        })
    }

    return list
}


export default function List (state = initialState , action) {
    switch (action.type) {
    case types.INIT_CHARACTER_LIST: {
        return JSON.parse(JSON.stringify(initialState))
    }
    case types.SET_CHARACTER_LIST_DEFAULT: {
        let tmp = []

        let image = getDefaultCharacterList()

        for (let value of image) {
            value["imageType"] = IMAGE_DISPLAY_TYPE_CHARACTER
            tmp.push(value)

            state.VoiceType[value.ID] = value.VoiceType
        }

        state.DefaultIcon = true
        state.list = tmp
        state.load = true

        return JSON.parse(JSON.stringify(state))
    }
    case types.DELETE_CHARACTER_LIST:
    case types.GET_CHARACTER_LIST: {

        if (!Array.isArray(action.response.Image)) {
            action.response.Image = []
        }

        if (action.response.Image.length == 0) {
            action.response.Image = getDefaultCharacterList()
            state.DefaultIcon = true
        } else {
            state.DefaultIcon = false
        }

        let tmp = []

        for (let value of action.response.Image) {
            value["imageType"] = action.receiveParam.imageType
            tmp.push(value)

            state.VoiceType[value.ID] = value.VoiceType
        }

        state.list = tmp
        state.load = true

        // アイコンの初期位置を取得
        if (action.response.Image.length > 0) {
            state = getSelectIconState(state, action.response.Image[0].ID)
        }

        return JSON.parse(JSON.stringify(state))
    }
    case types.SET_CHARACTER_LIST: {
        state = getSelectIconState(state, action.icon)

        return JSON.parse(JSON.stringify(state))
    }
    case types.SET_CHARACTER_VOICE_TYPE: {
        state.VoiceType[state.icon.id] = action.voiceType


        return JSON.parse(JSON.stringify(state))
    }
    case types.SAVE_CHARACTER_LIST: {

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
