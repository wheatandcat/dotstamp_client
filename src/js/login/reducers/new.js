import * as types from "../../constants/ActionTypes"

const initialState = {
    state: 0
}

export default function New (state = initialState , action) {
    switch (action.type) {
    case types.SET_LOGIN_USER: {
        location.href = "/"
        return JSON.parse(JSON.stringify(action.response))
    }
    default:
        return state
    }
}
