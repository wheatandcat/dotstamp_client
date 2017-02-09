const initialState = {
    Login: false,
    Name: ""
}

export default function Login (state = initialState , action) {
    switch (action.type) {
    case "SET_LOGIN_AUTH": {
        console.log (action)
        return JSON.parse(JSON.stringify(action))
    }
    case "LOGOUT_LOGIN_AUTH": {
        state.Login = false
        state.Name = ""
        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
