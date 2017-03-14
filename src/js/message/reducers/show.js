import * as types from "../../constants/ActionTypes"

// 初期ステート設定
const initialState = {
    Message: "",
    Show: false,
    Style: "success",
}

export default function Show (state = initialState , action) {
    switch (action.type) {
    case types.INIT_MESSAGE_SHOW: {

        return JSON.parse(JSON.stringify(initialState))
    }
    case types.OPEN_MESSAGE_SHOW: {
        state.Message = action.message
        state.Style = action.style
        state.Show = true

        return JSON.parse(JSON.stringify(state))
    }
    case types.CLOSE_MESSAGE_SHOW: {
        state.Show = false

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
