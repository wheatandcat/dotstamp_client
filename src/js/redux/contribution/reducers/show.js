// @flow
import * as types from "../../../constants/ActionTypes"
import { PROBLEM_TYPE_SPAM } from "../../../constants/contribution"

type State = {
  id: number,
  title: string,
  body: Array<*>,
  tags: Array<*>,
  user: {
    id: number,
    name: string,
    profileImageID: number
  },
  followCount: number,
  updatedAt: string,
  createdAt: string,
  following: boolean,
  load: boolean,
  problem: boolean,
  problemType: number,
  addProblem: boolean,
  soundFile: boolean,
  movie: Object
}

// 初期ステート設定
const initialState: State = {
  id: 0,
  title: "",
  body: [],
  tags: [],
  user: {
    id: 0,
    name: "",
    profileImageID: 0
  },
  followCount: -1,
  updatedAt: "",
  createdAt: "",
  following: false,
  load: false,
  problem: false,
  problemType: PROBLEM_TYPE_SPAM,
  addProblem: false,
  soundFile: false,
  movie: {}
}

export default function Show(state: State = initialState, action: any) {
  switch (action.type) {
    case types.GET_CONTRIBUTION_SHOW: {
      const {
        id,
        title,
        body,
        tags,
        user,
        updatedAt,
        createdAt,
        followCount,
        following,
        soundFile,
        movie
      } = action.response

      return Object.assign({}, state, {
        id,
        title,
        body,
        tags,
        user,
        updatedAt,
        createdAt,
        followCount,
        following,
        soundFile,
        movie,
        load: true
      })
    }
    case types.DELETE_FOLLOW: {
      state.followCount = action.response.followCount
      state.following = false

      return JSON.parse(JSON.stringify(state))
    }
    case types.ADD_FOLLOW: {
      state.followCount = action.response.followCount
      state.following = true

      return JSON.parse(JSON.stringify(state))
    }
    case types.OPEN_CONTRIBUTION_SHOW_PROBLEM: {
      state.addProblem = false
      state.problem = true

      return JSON.parse(JSON.stringify(state))
    }
    case types.CLOSE_CONTRIBUTION_SHOW_PROBLEM: {
      state.problem = false

      return JSON.parse(JSON.stringify(state))
    }
    case types.SET_CONTRIBUTION_SHOW_PROBLEM_TYPE: {
      state.problemType = action.problemType

      return JSON.parse(JSON.stringify(state))
    }
    case types.ADD_CONTRIBUTION_SHOW_PROBLEM: {
      state.addProblem = true

      return JSON.parse(JSON.stringify(state))
    }
    case types.DELETE_CONTRIBUTION_SHOW: {
      return JSON.parse(
        JSON.stringify({
          id: 0,
          title: "",
          body: [],
          tags: [],
          user: {
            id: 0,
            name: "",
            profileImageID: 0
          },
          followCount: -1,
          updatedAt: "",
          createdAt: "",
          following: false,
          load: false,
          problem: false,
          problemType: PROBLEM_TYPE_SPAM,
          addProblem: false,
          soundFile: false
        })
      )
    }
    default:
      return state
  }
}
