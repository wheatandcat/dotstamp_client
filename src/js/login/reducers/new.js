const initialState = {
    state: 0
}

export default function Login (state = initialState , action) {
    switch (action.type) {
    case "SET_USER_LOGIN": {
        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
