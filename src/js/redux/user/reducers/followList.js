// @flow
import * as types from "../../../constants/ActionTypes"

export type State = {
  list: Array<*>,
  order: number,
  page: number,
  count: number,
  limit: number
}

const initialState: State = {
  list: [],
  order: 1,
  page: 1,
  count: 0,
  limit: 10
}

export default function FollowList(state: State = initialState, action: any) {
  switch (action.type) {
    case types.GET_USER_FOLLOW_LIST: {
      state.list = action.response.list
      state.count = action.response.count

      return JSON.parse(JSON.stringify(state))
    }
    case types.PAGING_USER_FOLLOW_LIST: {
      state.page = action.page
      state.order = action.order

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
