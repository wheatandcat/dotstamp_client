import * as types from "../../constants/ActionTypes"

// 初期ステート設定
var list = []

const initialState = []

export default function Talk (state = initialState , action) {
    switch (action.type) {
    case types.GET_CONTRIBUTION_EDIT: {
        list = action.response.Body
        return list
    }
    case types.ADD_CONTRIBUTION_FORM_BODY: {
        let priority = list.length

        list.push({
            Priority: priority,
            Body: action.body,
            Character: action.character,
            DirectionType: action.directionType,
            TalkType: action.talkType,
            Edit: false
        })

        state = list.concat()

        return state
    }
    case types.EDIT_CONTRIBUTION_FORM_BODY: {
        list[action.priority].Body = action.body
        list[action.priority].Character = action.character
        list[action.priority].TalkType = action.talkType
        list[action.priority].DirectionType = action.directionType
        list[action.priority].Edit = false

        state = list.concat()

        return state
    }
    case "SET_CONTRIBUTION_EDIT_BODY": {
        let editList = []
        for (let value of list) {
            value.Edit = (value.Priority == action.priority)
            editList.push(value)
        }

        state = editList.concat()

        return state
    }
    case "DELETE_CONTRIBUTION_BODY": {
        list.splice(action.priority, 1)

        list.forEach((obj, key) => obj["Priority"] = key)
        list.forEach((obj) => obj["Edit"] = false)
        state = list.concat()

        return state
    }
    case "SET_CONTRIBUTION_TALK_LIST": {

        return action.talkList.concat()
    }
    default:
        return state
    }
}
