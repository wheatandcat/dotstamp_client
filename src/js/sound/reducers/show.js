import * as types from "../../constants/ActionTypes"

const initialState = {
    List:[],
    Make: false,
    Loading: false,
}

export default function Show (state = initialState , action) {
    switch (action.type) {
    case types.ON_LOADING: {
        state.Loading = true

        return JSON.parse(JSON.stringify(state))
    }
    case types.GET_CONTRIBUTION_FORM_SOUND_DETAIL: {
        state.List = action.response.List

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
    case types.REFLECT_SOUND_SHOW:
    case types.SAVE_SOUND_SHOW_VOICE_TYPE:
    case types.SAVE_SOUND_SHOW_BODY_SOUND: {
        return JSON.parse(JSON.stringify(state))
    }
    case types.MAKE_SOUND_SHOW: {
        state.Make = true
        state.Loading = false

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
