import * as types from "../../constants/ActionTypes"

// 初期ステート設定
const initialState = {
    id: null,
    title: "",
    body: "",
    tagList: []
}

export default function Edit(state = initialState, action) {
    switch (action.type) {
    case types.GET_CONTRIBUTION_EDIT:
        state.id = action.response.ID
        state.title = action.response.Title
        state.body = action.response.Body
        state.tagList = action.response.Tag

        return JSON.parse(JSON.stringify(state))
    default:
        return state
    }
}
