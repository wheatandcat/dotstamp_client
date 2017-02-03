import Actions from "../../../contribution/actions/form"
import Reducers from "../../../contribution/reducers/form"

describe("ReducersList", () => {
    it("本文を編集する", () => {
        const params = {
            character: {
                ID: 1,
                FileName: "abc"
            },
            body: "def",
            directionType: 1,
            priority: 1
        }

        const expected = {
            edit: false,
            tag: "",
            tagList: [],
            title: "",
            body: "",
            priority: null,
            character: {
                FileName: ""
            },
            directionType: 1,
            boardScroll: false,
            height: 450

        }

        const result = Reducers(undefined, Actions.editBody(params.body, params.character, params.directionType, params.priority))

        expect(result).toEqual(expected)
    })
})
