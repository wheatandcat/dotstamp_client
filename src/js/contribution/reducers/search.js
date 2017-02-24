import * as types from "../../constants/ActionTypes"

// 初期ステート設定
const initialState = {
    List: [],
    Limit:10,
    Count: 0,
    Order: 1,
    Page: 1,
    Search: "",
}

export default function List (state = initialState, action) {
    switch (action.type) {
    case types.GET_CONTRIBUTION_SEARCH_LIST: {
        state.List = action.response.List
        state.Count = action.response.Count

        return JSON.parse(JSON.stringify(state))
    }
    case types.PAGING_CONTRIBUTION_SEARCH_LIST: {
        state.Search = action.search
        state.Page = action.page
        state.Order = action.order

        location.href = "/#/contribution/search/" + action.search + "/" + action.order + "/" + action.page

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
