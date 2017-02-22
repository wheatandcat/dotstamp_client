import * as types from "../../constants/ActionTypes"

// 初期ステート設定
const initialState = {
    Title: "",
    Body: [],
    TagList: [],
    User:{
        ID: 0,
        Name: "",
        ProfileImageID: 0,
    },
    UpdatedAt: "",
    CreatedAt: "",
}

export default function Show (state = initialState , action) {
    switch (action.type) {
    case types.GET_CONTRIBUTION_SHOW: {
        state.Title = action.response.Title
        state.Body = action.response.Body
        state.TagList = action.response.Tag
        state.User = action.response.User
        state.UpdatedAt = action.response.UpdatedAt
        state.CreatedAt = action.response.CreatedAt

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
