import * as types from "../../constants/ActionTypes"


const initialState = {
    User: {
        ID: 0,
        Name: "",
        ProfileImageID: 0,
    },
    Profile: [],
}

export default function Mypage (state = initialState , action) {
    switch (action.type) {
    case types.SET_USER: {
        return Object.assign({}, state, {
            User: action.response.User,
            Profile: action.response.Profile
        })
    }
    case types.CHANGE_USER_NAME: {
        state.User.Name = action.name

        return JSON.parse(JSON.stringify(state))
    }
    case types.SAVE_USER: {
        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
