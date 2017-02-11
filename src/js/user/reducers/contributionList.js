import * as types from "../../constants/ActionTypes"

// 初期ステート設定
const initialState = {
    contributionId: 0,
    list: []
}

export default function ContributionList (state = initialState , action) {
    switch (action.type) {
    case types.GET_USER_CONTRBUTION_LIST: {
        state.list = action.response
        if (state.list.length > 0) {
            state.contributionId = state.list[0].ID
        }

        return JSON.parse(JSON.stringify(state))
    }
    case types.SET_USER_CONTRBUTION_LIST: {
        state.contributionId = action.contributionId

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
