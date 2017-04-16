import * as types from "../../../constants/ActionTypes"

// 初期ステート設定
const initialState = {
  List: [],
  Limit: 10,
  Count: 0,
  Order: 1,
  Page: 1,
  Search: ""
}

export default function List(state = initialState, action) {
  switch (action.type) {
  case types.GET_CONTRIBUTION_SEARCH_LIST:
    {
      state.List = action.response.List
      state.Count = action.response.Count

      state.Search = action.receiveParam.search
      state.Page = action.receiveParam.page
      state.Order = action.receiveParam.order

      location.href = "/#/contribution/search/" + state.Search + "/" + state.Order + "/" + state.Page
      return JSON.parse(JSON.stringify(state))
    }
  case types.PAGING_CONTRIBUTION_SEARCH_LIST:
    {
      state.Search = action.search
      state.Page = action.page
      state.Order = action.order

      location.href = "/#/contribution/search/" + state.Search + "/" + state.Order + "/" + state.Page
      return JSON.parse(JSON.stringify(state))
    }
  case types.SET_CONTRIBUTION_SEARCH_ORDER:
    {
      state.Order = action.order

      return JSON.parse(JSON.stringify(state))
    }
  default:
    return state
  }
}
