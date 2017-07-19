// @flow
import * as types from "../../../constants/ActionTypes"

export type State = {
  list: Array<*>,
  limit: number,
  count: number,
  order: number,
  page: number,
  search: string
}

// 初期ステート設定
const initialState: State = {
  list: [],
  limit: 10,
  count: 0,
  order: 1,
  page: 1,
  search: ""
}

export default function List(state: State = initialState, action: any) {
  switch (action.type) {
    case types.GET_CONTRIBUTION_SEARCH_LIST: {
      state.list = action.response.list
      state.count = action.response.count

      state.search = action.receiveParam.search
      state.page = action.receiveParam.page
      state.order = action.receiveParam.order

      return JSON.parse(JSON.stringify(state))
    }
    case types.PAGING_CONTRIBUTION_SEARCH_LIST: {
      state.search = action.search
      state.page = action.page
      state.order = action.order

      return JSON.parse(JSON.stringify(state))
    }
    case types.SET_CONTRIBUTION_SEARCH_ORDER: {
      state.order = action.order

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
