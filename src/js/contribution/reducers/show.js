// 初期ステート設定
const initialState = {
    title: "",
    body: [],
    tagList: []
}

export default function Show (state = initialState , action) {
    switch (action.type) {
    case "GET_CONTRIBUTION_SHOW": {
        state.title = action.title
        state.body = action.body
        state.tagList = action.tagList

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
