import * as types from "../../constants/ActionTypes"

import {getUniqueStr} from "../../utils/common"
import {SOUND_STATUS_PRIVATE} from "../../constants/contribution"

const initialState = {
    List:[],
    Make: false,
    Loading: false,
    Hash: "",
    SoundStatus: SOUND_STATUS_PRIVATE,
}

export default function Show (state = initialState , action) {
    switch (action.type) {
    case types.ON_LOADING: {
        state.Loading = true

        return JSON.parse(JSON.stringify(state))
    }
    case types.GET_CONTRIBUTION_FORM_SOUND_DETAIL: {
        state.List = action.response.List
        state.Make = action.response.SoundFile
        state.Hash = getUniqueStr()
        state.SoundStatus = action.response.SoundStatus

        return JSON.parse(JSON.stringify(state))
    }
    case types.CHANGE_SOUND_SHOW_BODY_SOUND: {
        state.List[action.priority].body_sound = action.bodySound

        return JSON.parse(JSON.stringify(state))
    }
    case types.CHANGE_SOUND_SHOW_VOICE_TYPE: {
        state.List[action.priority].voice_type = action.voiceType

        return JSON.parse(JSON.stringify(state))
    }
    case types.SAVE_SOUND_SHOW: {
        state.SoundStatus = action.receiveParam.soundStatus

        return JSON.parse(JSON.stringify(state))
    }
    case types.REFLECT_SOUND_SHOW:
    case types.SAVE_SOUND_SHOW_VOICE_TYPE:
    case types.SAVE_SOUND_SHOW_BODY_SOUND: {
        return JSON.parse(JSON.stringify(state))
    }
    case types.MAKE_SOUND_SHOW: {
        state.Make = true
        state.Loading = false
        state.Hash = getUniqueStr()

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
