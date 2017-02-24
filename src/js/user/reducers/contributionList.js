import * as types from "../../constants/ActionTypes"

// 初期ステート設定
const initialState = {
    ContributionId: 0,
    List: [],
    Count: 0,
}

export default function ContributionList (state = initialState , action) {
    switch (action.type) {
    case types.GET_USER_CONTRBUTION_LIST: {
        state.List = action.response.List
        state.Count = action.response.Count

        if (Array.isArray(state.List) && state.List.length > 0) {
            state.ContributionId = state.List[0].ID
        }

        return JSON.parse(JSON.stringify(state))
    }
    case types.SET_USER_CONTRBUTION_LIST: {
        state.ContributionId = action.contributionId

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
