import * as types from "../../constants/ActionTypes"

const initialState = {
    Login: false,
    Name: ""
}

export default function Auth (state = initialState , action) {
    switch (action.type) {
    case types.SET_LOGIN_AUTH: {
        return JSON.parse(JSON.stringify(action.response))
    }
    case types.LOGOUT_LOGIN_AUTH: {
        state.Login = false
        state.Name = ""

        location.href = "/"
        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
