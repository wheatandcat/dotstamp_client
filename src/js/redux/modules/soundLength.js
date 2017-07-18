// @flow
import * as types from "../../constants/ActionTypes"

type State = {
  character: number
}

const initialState: State = {
  character: 0
}

export default function Length(state: State = initialState, action: Object) {
  switch (action.type) {
    case types.GET_SOUND_LENGTH:
      return Object.assign({}, state, {
        character: action.response.character
      })
    default:
      return state
  }
}
