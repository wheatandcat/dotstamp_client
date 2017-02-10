import * as types from "../../../constants/ActionTypes"
import Reducers from "../../../contribution/reducers/edit"

describe("contribution/reducers/edit", () => {
    it("詳細を取得する", () => {
        const expected = {
            type: types.GET_CONTRIBUTION_EDIT,
            id: 1,
            title: "abc",
            body: "abcdef",
            tagList: [
                "efg",
                "hij"
            ]
        }

        const result = Reducers(undefined, expected)

        expect(result).toEqual(expected)
    })
})
