import { IMAGE_DISPLAY_TYPE_CHARACTER } from "../../utils/image"

// 初期ステート設定
const initialState = {
    list: [],
    icon: {
        id: 0,
        fileName: "",
        select: 0
    },
    imageType: IMAGE_DISPLAY_TYPE_CHARACTER
}

export default function List (state = initialState , action) {
    switch (action.type) {
    case "GET_CHARACTER_LIST": {
        let tmp = []

        for (let value of action.list.Image) {
            value["imageType"] = action.imageType
            tmp.push(value)
        }

        state.list = tmp

        return JSON.parse(JSON.stringify(state))
    }
    case "SET_CHARACTER_ICON": {
        let id = action.icon

        let count = 0
        for (let value of state.list) {
            if (value.ID == id) {
                state.icon = {
                    id: value.ID,
                    fileName: value.FileName,
                    select: count
                }
            }
            count++
        }
        return JSON.parse(JSON.stringify(state))
    }
    default:
        return state
    }
}
