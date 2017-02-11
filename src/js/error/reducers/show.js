import * as types from "../../constants/ActionTypes"

// 初期ステート設定
const initialState = {
    message: "",
    errCode: 0,
    show: false
}

export default function Show (state = initialState , action) {
    switch (action.type) {
    case types.SHOW_ERROR_MESSAGE: {
        state.message = action.message
        state.errCode = action.errCode
        state.show = action.show

        return JSON.parse(JSON.stringify(state))
    }
    case types.CLOSE_ERROR_MESSAGE: {

        state.show = action.show
        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
