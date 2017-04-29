import * as types from "../../../constants/ActionTypes"

const initialState = {
  List: [],
  Order: 1,
  Page: 1,
  Count: 0,
  Limit: 10
}

export default function FollowList(state = initialState, action) {
  switch (action.type) {
  case types.GET_USER_FOLLOW_LIST:
    {

      state.List = action.response.List
      state.Count = action.response.Count

      return JSON.parse(JSON.stringify(state))
    }
  case types.PAGING_USER_FOLLOW_LIST:
    {
      state.Page = action.page
      state.Order = action.order

      location.pathname = "/user/followList/" + action.order + "/" + action.page

      return JSON.parse(JSON.stringify(state))
    }
  default:
    return state
  }
}
