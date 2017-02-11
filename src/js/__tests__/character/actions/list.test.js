import {setIcon} from "../../../character/actions/list"
import * as types from "../../../constants/ActionTypes"

describe("character/action/list", () => {
    it("アイコンを設定する", () => {
        const expected = {
            type: types.SET_CHARACTER_LIST,
            icon: 1
        }

        const result = setIcon(1)

        expect(result).toEqual(expected)
    })
})
