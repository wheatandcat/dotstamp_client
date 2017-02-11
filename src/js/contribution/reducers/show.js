import * as types from "../../constants/ActionTypes"

// 初期ステート設定
const initialState = {
    title: "",
    body: [],
    tagList: []
}

export default function Show (state = initialState , action) {
    switch (action.type) {
    case types.GET_CONTRIBUTION_SHOW: {
        state.title = action.response.Title
        state.body = action.response.Body
        state.tagList = action.response.Tag

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
