import * as types from "../../constants/ActionTypes"

import {getUniqueStr} from "../../utils/common"
import {SOUND_STATUS_PRIVATE, STATUS_PRIVATE, STATUS_PUBLIC, STATUS_REMEAKE, STATUS_RUNNING} from "../../constants/contribution"

const initialState = {
    List:[],
    MakeSound: false,
    Loading: false,
    Hash: "",
    SoundStatus: SOUND_STATUS_PRIVATE,
    MakeMovie: false,
    MovieStatus: STATUS_PRIVATE,
}

export default function Show (state = initialState , action) {
    switch (action.type) {
    case types.ON_LOADING: {
        state.Loading = true

        return JSON.parse(JSON.stringify(state))
    }
    case types.GET_CONTRIBUTION_FORM_SOUND_DETAIL: {
        state.List = action.response.List
        state.MakeSound = action.response.SoundFile
        state.Hash = getUniqueStr()
        state.SoundStatus = action.response.SoundStatus
        state.MakeMovie = action.response.MovieFile

        if (action.response.Movie != 0) {
            state.MovieStatus = action.response.Movie.movie_status
        }

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
    case types.REFLECT_SOUND_SHOW: {
        return JSON.parse(JSON.stringify(state))
    }
    case types.SAVE_SOUND_SHOW_VOICE_TYPE:
    case types.SAVE_SOUND_SHOW_BODY_SOUND: {

        state.List[parseInt(action.receiveParam.priority)].make_status = 1

        return JSON.parse(JSON.stringify(state))
    }
    case types.MAKE_SOUND_SHOW: {
        state.MakeSound = true
        state.Loading = false
        state.Hash = getUniqueStr()

        return JSON.parse(JSON.stringify(state))
    }
    case types.MAKE_SOUND_SHOW_MOVIE: {
        state.MakeMovie = true

        if (state.MovieStatus == STATUS_PUBLIC) {
            state.MovieStatus = STATUS_REMEAKE
        }

        return JSON.parse(JSON.stringify(state))
    }
    case types.UPLOADING_SOUND_MENU_MOVIE: {
        state.MovieStatus = STATUS_RUNNING

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
