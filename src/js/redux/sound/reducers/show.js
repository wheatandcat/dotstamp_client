// @flow
import * as types from "../../../constants/ActionTypes"

import { getUniqueStr } from "../../../utils/common"
import {
  STATUS_PRIVATE,
  STATUS_PUBLIC,
  STATUS_UPLOADING,
  STATUS_RUNNING
} from "../../../constants/contribution"

export type State = {
  list: Array<*>,
  hash: string,
  makeMovie: boolean,
  movieStatus: number,
  movieID: string,
  checkMake: boolean,
  detail: boolean,
  movieMakeListener: boolean,
  voiceList: boolean
}

const initialState: State = {
  list: [],
  hash: "",
  makeMovie: false,
  movieStatus: STATUS_PRIVATE,
  movieID: "",
  checkMake: false,
  detail: false,
  movieMakeListener: false,
  voiceList: false
}

export default function Show(state: State = initialState, action: any) {
  switch (action.type) {
    case types.GET_CONTRIBUTION_FORM_SOUND_DETAIL: {
      state.list = action.response.list
      state.hash = getUniqueStr()
      state.makeMovie = action.response.movieFile

      if (action.response.movie != 0) {
        state.movieStatus = action.response.movie.movie_status
        state.movieID = action.response.movie.movie_id
      }

      if (state.MovieStatus == STATUS_RUNNING) {
        state.checkMake = true
        state.movieMakeListener = true
      }
      state.detail = false

      return JSON.parse(JSON.stringify(state))
    }
    case types.CHECK_SOUND_SHOW_MOVIE: {
      state.movieStatus = action.response.movieStatus
      if (state.movieStatus == STATUS_RUNNING) {
        state.movieMakeListener = true
      } else {
        state.movieMakeListener = false
        state.makeMovie = true
        state.detail = true
      }

      return JSON.parse(JSON.stringify(state))
    }
    case types.OFF_SOUND_SHOW_MOVIE_MAKE_LISTENER: {
      state.movieMakeListener = false

      return JSON.parse(JSON.stringify(state))
    }
    case types.CHANGE_SOUND_SHOW_BODY_SOUND: {
      state.list[action.priority].body_sound = action.bodySound

      return JSON.parse(JSON.stringify(state))
    }
    case types.CHANGE_SOUND_SHOW_VOICE_TYPE: {
      state.list[action.priority].voice_type = action.voiceType

      return JSON.parse(JSON.stringify(state))
    }
    case types.REFLECT_SOUND_SHOW: {
      return JSON.parse(JSON.stringify(state))
    }
    case types.SAVE_SOUND_SHOW_VOICE_TYPE:
    case types.SAVE_SOUND_SHOW_BODY_SOUND: {
      state.list[parseInt(action.receiveParam.priority)].make_status = 1

      return JSON.parse(JSON.stringify(state))
    }
    case types.MAKE_SOUND_SHOW_MOVIE: {
      state.makeMovie = true

      state.movieStatus = STATUS_RUNNING

      state.checkMake = true
      state.movieMakeListener = true

      return JSON.parse(JSON.stringify(state))
    }
    case types.UPLOAD_SOUND_YOUTUBE: {
      state.movieStatus = STATUS_PUBLIC

      return JSON.parse(JSON.stringify(state))
    }
    case types.UPLOADING_SOUND_MENU_MOVIE: {
      state.movieStatus = STATUS_UPLOADING

      return JSON.parse(JSON.stringify(state))
    }
    case types.OPEN_SOUND_SHOW_VOICE_LIST: {
      state.voiceList = true

      return JSON.parse(JSON.stringify(state))
    }
    case types.SAVE_SOUND_SHOW_VOICE_TYPE_LIST:
    case types.CLOSE_SOUND_SHOW_VOICE_LIST: {
      state.voiceList = false

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
