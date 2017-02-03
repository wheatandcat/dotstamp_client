// 初期ステート設定
const initialState = {
    id: null,
    title: "",
    body: "",
    tagList: []
}

export default function Edit(state = initialState, action) {
    switch (action.type) {
    case "GET_CONTRIBUTION_EDIT":
        return action
    default:
        return state
    }
}
