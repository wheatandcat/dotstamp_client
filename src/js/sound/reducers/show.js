import * as types from "../../constants/ActionTypes"

import {getUniqueStr} from "../../utils/common"
import {STATUS_PRIVATE, STATUS_PUBLIC, STATUS_UPLOADING, STATUS_RUNNING} from "../../constants/contribution"

const initialState = {
    List:[],
    Hash: "",
    MakeMovie: false,
    MovieStatus: STATUS_PRIVATE,
    MovieID: "",
    CheckMake: false,
    MovieMakeListener: false,
}

export default function Show (state = initialState , action) {
    switch (action.type) {
    case types.GET_CONTRIBUTION_FORM_SOUND_DETAIL: {
        state.List = action.response.List
        state.Hash = getUniqueStr()
        state.MakeMovie = action.response.MovieFile

        if (action.response.Movie != 0) {
            state.MovieStatus = action.response.Movie.movie_status
            state.MovieID = action.response.Movie.movie_id
        }

        if (state.MovieStatus == STATUS_RUNNING) {
            state.CheckMake = true
            state.MovieMakeListener = true
        }

        return JSON.parse(JSON.stringify(state))
    }
    case types.CHECK_SOUND_SHOW_MOVIE: {
        state.MovieStatus = action.response.MovieStatus
        if (state.MovieStatus == STATUS_RUNNING) {
            state.MovieMakeListener = true
        }

        return JSON.parse(JSON.stringify(state))
    }
    case types.OFF_SOUND_SHOW_MOVIE_MAKE_LISTENER: {
        state.MovieMakeListener = false

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
    case types.REFLECT_SOUND_SHOW: {
        return JSON.parse(JSON.stringify(state))
    }
    case types.SAVE_SOUND_SHOW_VOICE_TYPE:
    case types.SAVE_SOUND_SHOW_BODY_SOUND: {

        state.List[parseInt(action.receiveParam.priority)].make_status = 1

        return JSON.parse(JSON.stringify(state))
    }
    case types.MAKE_SOUND_SHOW_MOVIE: {
        state.MakeMovie = true

        state.MovieStatus = STATUS_RUNNING

        state.CheckMake = true
        state.MovieMakeListener = true

        return JSON.parse(JSON.stringify(state))
    }
    case types.UPLOAD_SOUND_YOUTUBE: {
        state.MovieStatus = STATUS_PUBLIC

        return JSON.parse(JSON.stringify(state))
    }
    case types.UPLOADING_SOUND_MENU_MOVIE: {
        state.MovieStatus = STATUS_UPLOADING

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
