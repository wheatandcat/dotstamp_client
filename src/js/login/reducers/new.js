import * as types from "../../constants/ActionTypes"

const initialState = {
    state: 0,
    Warning: false,
    Message: "",
}

export default function New (state = initialState , action) {
    switch (action.type) {
    case types.SET_LOGIN_USER: {
        state.Warning = action.response.Warning
        state.Message = action.response.Message

        if(!state.Warning) {
            location.href = "/"
        }

        return JSON.parse(JSON.stringify(action.response))
    }
    default:
        return state
    }
}
