// 初期ステート設定
const initialState = {
    contributionId: 0,
    list: []
}

export default function ContributionList (state = initialState , action) {
    switch (action.type) {
    case "GET_USER_CONTRBUTION_LIST": {
        state.list = action.list

        return JSON.parse(JSON.stringify(state))
    }
    case "SET_USER_CONTRBUTION": {
        state.contributionId = action.contributionId

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
