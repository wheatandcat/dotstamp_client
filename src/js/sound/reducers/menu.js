import * as types from "../../constants/ActionTypes"

const initialState = {
    Open: false,
    OpenUpload: false,
    Making: false,
    Information: {
        Shwo:false,
        Message: "",
    }
}

export default function Show (state = initialState , action) {
    switch (action.type) {
    case types.OPEN_SOUND_MENU_REMAKE: {
        state.Open = true

        return JSON.parse(JSON.stringify(state))
    }
    case types.CLOSE_SOUND_MENU_REMAKE: {
        state.Open = false

        return JSON.parse(JSON.stringify(state))
    }
    case types.OPEN_SOUND_MENU_UPLOAD: {
        state.OpenUpload = true

        return JSON.parse(JSON.stringify(state))
    }
    case types.CLOSE_SOUND_MENU_UPLOAD: {
        state.OpenUpload = false

        return JSON.parse(JSON.stringify(state))
    }
    case types.MAKING_SOUND_MENU_MOVIE: {
        state.Making = true

        return JSON.parse(JSON.stringify(state))
    }
    case types.MAKE_SOUND_SHOW_MOVIE: {
        state.Making = false
        state.Open = false

        return JSON.parse(JSON.stringify(state))
    }
    case types.UPLOAD_SOUND_YOUTUBE: {
        state.Information.Show = true
        state.Information.Message = "アップロードが完了しました"

        return JSON.parse(JSON.stringify(state))
    }
    case types.OPEN_SOUND_MENU_INFORMATION: {
        state.Information.Show = true
        state.Information.Message = ""

        return JSON.parse(JSON.stringify(state))
    }
    case types.CLOSE_SOUND_MENU_INFORMATION: {
        state.Information.Show = false

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
