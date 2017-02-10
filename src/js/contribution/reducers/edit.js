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
        state.id = action.ID
        state.title = action.Title
        state.body = action.Body
        state.tagList = action.Tag

        return action.response
    default:
        return state
    }
}
