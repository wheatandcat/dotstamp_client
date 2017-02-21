import * as types from "../../constants/ActionTypes"

// 初期ステート設定
const initialState = {
    list: [],
    limit:10,
}

export default function List (state = initialState, action) {
    switch (action.type) {
    case types.GET_CONTRIBUTION_SEARCH_LIST: {
        state.list = action.response

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
