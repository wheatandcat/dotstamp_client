import { DIRECTION_LEFT } from "../actions/talk"

const initialState = {
    edit: false,
    tag: "",
    tagList: [],
    title: "",
    body: "",
    priority: null,
    character: {
        FileName: ""
    },
    directionType: DIRECTION_LEFT,
    height: 450,
    boardScroll: false
}

var onBoardScrollActionTypeList = [
    "ADD_CONTRIBUTION_BODY"
]

export default function Form (state = initialState , action) {
    if (!onBoardScrollActionTypeList.indexOf(action.type)) {
        state.boardScroll = true
        state.body = ""
    } else {
        state.boardScroll = false
    }

    switch (action.type) {
    case "EDIT_CONTRIBUTION_BODY":
        state.edit = false
        state.body = ""
        state.priority = null

        return JSON.parse(JSON.stringify(state))
    case "CHANGE_CONTRIBUTION_CHARACTER":
        state.character = action.character

        return JSON.parse(JSON.stringify(state))
    case "CHANGE_CONTRIBUTION_BODY":
        state.body = action.body

        return JSON.parse(JSON.stringify(state))
    case "CHANGE_DIRECTION":
        state.directionType = action.directionType

        return state
    case "DELETE_CONTRIBUTION_BODY":
        state.edit = false
        state.body = ""
        state.priority = null

        return JSON.parse(JSON.stringify(state))
    case "CHANGE_CONTRIBUTION_TITLE":
        state.title = action.title

        return JSON.parse(JSON.stringify(state))
    case "CHANGE_CONTRIBUTION_TAG":
        state.tag = action.tag

        return JSON.parse(JSON.stringify(state))
    case "SET_CONTRIBUTION_EDIT_BODY":
        state.edit = true
        state.body = action.body
        state.priority = action.priority
        state.directionType = action.directionType
        state.character = action.character

        return JSON.parse(JSON.stringify(state))
    case "GET_CONTRIBUTION_EDIT":
        state.title = action.title
        state.tagList = action.tagList

        return JSON.parse(JSON.stringify(state))
    case "CHANGE_CONTRIBUTION_HEIGHT":
        state.height = action.height

        return JSON.parse(JSON.stringify(state))
    default:
        return state
    }
}
