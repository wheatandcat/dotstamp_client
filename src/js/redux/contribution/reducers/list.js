// @flow
import * as types from "../../../constants/ActionTypes"

export type State = {
  list: Array<*>,
  order: number,
  next: boolean,
  init: boolean,
  itemMap: Object
}

const initialState: State = {
  list: [],
  order: 0,
  next: true,
  init: true,
  itemMap: {}
}

export default function List(state: State = initialState, action: any) {
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
      const { id, title, body, tags } = action.response
      state.itemMap = {}
      state.itemMap[id] = {
        title,
        body,
        tags
      }

      return JSON.parse(JSON.stringify(state))
    }
    case types.DELETE_CONTRIBUTION_LIST_ITEM: {
      const { id } = action

      if (state.itemMap[id] != undefined) {
        delete state.itemMap[id]
      }

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
