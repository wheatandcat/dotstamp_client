const initialState = {
    Login: false,
    Name: ""
}

export default function Login (state = initialState , action) {
    switch (action.type) {
    case "SET_LOGIN_AUTH": {
        return JSON.parse(JSON.stringify(action))
    }
    default:
        return state
    }
}
