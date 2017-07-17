// @flow
import * as types from "../../../constants/ActionTypes"
import { STATUS_RUNNING } from "../../../constants/contribution"

type State = {
  open: boolean,
  openUpload: boolean,
  making: boolean,
  movieStatus: number,
  information: {
    show: boolean,
    message: string
  }
}

const initialState: State = {
  open: false,
  openUpload: false,
  making: false,
  movieStatus: 0,
  information: {
    show: false,
    message: ""
  }
}

export default function Show(state: State = initialState, action: any) {
  switch (action.type) {
    case types.OPEN_SOUND_MENU_REMAKE: {
      state.open = true

      return JSON.parse(JSON.stringify(state))
    }
    case types.CLOSE_SOUND_MENU_REMAKE: {
      state.open = false

      return JSON.parse(JSON.stringify(state))
    }
    case types.OPEN_SOUND_MENU_UPLOAD: {
      state.openUpload = true

      return JSON.parse(JSON.stringify(state))
    }
    case types.CLOSE_SOUND_MENU_UPLOAD: {
      state.openUpload = false

      return JSON.parse(JSON.stringify(state))
    }
    case types.MAKING_SOUND_MENU_MOVIE: {
      state.making = true

      return JSON.parse(JSON.stringify(state))
    }
    case types.CHECK_SOUND_SHOW_MOVIE: {
      state.making = state.movieStatus == STATUS_RUNNING

      return JSON.parse(JSON.stringify(state))
    }
    case types.MAKE_SOUND_SHOW_MOVIE: {
      state.making = true
      state.open = false

      return JSON.parse(JSON.stringify(state))
    }
    case types.UPLOAD_SOUND_YOUTUBE: {
      state.information.show = true
      state.information.message = "アップロードが完了しました"

      return JSON.parse(JSON.stringify(state))
    }
    case types.OPEN_SOUND_MENU_INFORMATION: {
      state.information.show = true
      state.information.message = ""

      return JSON.parse(JSON.stringify(state))
    }
    case types.CLOSE_SOUND_MENU_INFORMATION: {
      state.information.show = false

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
