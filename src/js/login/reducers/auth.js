import * as types from "../../constants/ActionTypes"


const initialState = {
    Login: false,
    Name: ""
}

export default function Login (state = initialState , action) {
    switch (action.type) {
    case types.SET_LOGIN_AUTH: {
        return JSON.parse(JSON.stringify(action.response))
    }
    case types.LOGOUT_LOGIN_AUTH: {
        state.Login = false
        state.Name = ""
        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
