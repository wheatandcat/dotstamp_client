import * as types from "../../../constants/ActionTypes"

// 初期ステート設定
const initialState = {
  list: [],
  order: 0,
  next: true,
  init: true,
  itemMap: {}
}

export default function List(state = initialState, action) {
  switch (action.type) {
    case types.GET_CONTRIBUTION_LIST: {
      state.list = action.response

      state.order++
      state.next = false
      if (action.receiveParam.init) {
        state.next = true
      }
      state.init = action.receiveParam.init

      return JSON.parse(JSON.stringify(state))
    }
    case types.GET_CONTRIBUTION_LIST_NEXT: {
      state.next = true

      return JSON.parse(JSON.stringify(state))
    }
    case types.ADD_CONTRIBUTION_LIST_ITEM: {
      const response = action.response
      state.itemMap[response.ID] = {
        title: response.Title,
        body: response.Body,
        tagList: response.Tag
      }

      return JSON.parse(JSON.stringify(state))
    }
    case types.DELETE_CONTRIBUTION_LIST_ITEM: {
      if (state.itemMap[action.id] != undefined) {
        delete state.itemMap[action.id]
      }

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
