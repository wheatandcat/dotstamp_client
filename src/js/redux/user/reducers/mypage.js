// @flow
import * as types from "../../../constants/ActionTypes"

export type State = {
  user: {
    id: number,
    name: string,
    profileImageID: number
  },
  profile: Array<*>
}

const initialState: State = {
  user: {
    id: 0,
    name: "",
    profileImageID: 0
  },
  profile: []
}

export default function Mypage(state: State = initialState, action: any) {
  switch (action.type) {
    case types.SET_USER: {
      return Object.assign({}, state, {
        user: action.response.user,
        profile: action.response.profile
      })
    }
    case types.CHANGE_USER_NAME: {
      state.user.name = action.name

      return JSON.parse(JSON.stringify(state))
    }
    case types.SAVE_USER: {
      return JSON.parse(JSON.stringify(state))
    }
    default:
      return state
  }
}
