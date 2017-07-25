// @flow
import * as types from "../../../constants/ActionTypes"
import { VIEW_STATUS_PRIVATE } from "../../../constants/contribution"

export type State = {
  contributionId: number,
  all: Array<*>,
  list: Array<*>,
  count: number,
  titles: Array<*>,
  searchTitle: string,
  load: boolean,
  viewStatus: number,
  deleteConfirm: boolean
}

const initialState: State = {
  contributionId: 0,
  all: [],
  list: [],
  count: 0,
  titles: [],
  searchTitle: "",
  load: false,
  viewStatus: VIEW_STATUS_PRIVATE,
  deleteConfirm: false
}

export default function ContributionList(
  state: State = initialState,
  action: any
) {
  switch (action.type) {
    case types.INIT_USER_CONTRBUTION_LIST: {
      return JSON.parse(JSON.stringify(initialState))
    }
    case types.GET_USER_CONTRBUTION_LIST: {
      if (!state.load) {
        state.list = action.response.privtes
        if (Array.isArray(state.list) && state.list.length > 0) {
          state.contributionId = state.list[0].id
        }
      } else {
        state.list = action.response.list
      }

      state.all = action.response.list
      state.count = action.response.count
      state.titles = action.response.titles

      state.load = true
      return JSON.parse(JSON.stringify(state))
    }
    case types.SET_USER_CONTRBUTION_LIST: {
      state.contributionId = action.contributionId

      return JSON.parse(JSON.stringify(state))
    }
    case types.SET_USER_CONTRBUTION_LIST_SEARCH: {
      state.list = action.list

      return JSON.parse(JSON.stringify(state))
    }
    case types.SET_USER_CONTRBUTION_LIST_VIEW_STATUS: {
      state.viewStatus = action.viewStatus

      return JSON.parse(JSON.stringify(state))
    }
    case types.DELETE_CONTRIBUTION_SHOW: {
      state.contributionId = 0
      state.deleteConfirm = false

      return JSON.parse(JSON.stringify(state))
    }
    case types.OPEN_USER_CONTRBUTION_LIST_CONFIRM: {
      state.deleteConfirm = true

      return JSON.parse(JSON.stringify(state))
    }
    case types.CLOSE_USER_CONTRBUTION_LIST_CONFIRM: {
      state.deleteConfirm = false

      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
