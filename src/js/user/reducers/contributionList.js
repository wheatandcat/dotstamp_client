import * as types from "../../constants/ActionTypes"
import {VIEW_STATUS_PRIVATE} from "../../constants/contribution.js"

// 初期ステート設定
const initialState = {
    ContributionId: 0,
    All: [],
    List: [],
    Count: 0,
    TitleList: [],
    SearchTitle: "",
    Load: false,
    ViewStatus: VIEW_STATUS_PRIVATE,
}

export default function ContributionList (state = initialState , action) {
    switch (action.type) {
    case types.GET_USER_CONTRBUTION_LIST: {
        state.List = action.response.PrivteList
        state.All = action.response.List
        state.Count = action.response.Count
        state.TitleList = action.response.TitleList

        if (Array.isArray(state.List) && state.List.length > 0) {
            state.ContributionId = state.List[0].ID
        }

        return JSON.parse(JSON.stringify(state))
    }
    case types.SET_USER_CONTRBUTION_LIST: {
        state.ContributionId = action.contributionId

        return JSON.parse(JSON.stringify(state))
    }
    case types.SET_USER_CONTRBUTION_LIST_SEARCH: {
        state.List = action.list

        return JSON.parse(JSON.stringify(state))
    }
    case types.SET_USER_CONTRBUTION_LIST_VIEW_STATUS: {
        state.ViewStatus = action.viewStatus

        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
