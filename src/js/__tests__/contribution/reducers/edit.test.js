import Actions from "../../../contribution/actions/edit"
import Reducers from "../../../contribution/reducers/edit"


describe("ReducersList", () => {
    it("詳細を取得する", () => {
        const expected = {
            type: "GET_CONTRIBUTION_EDIT",
            id: 1,
            title: "abc",
            body: "abcdef",
            tagList: [
                "efg",
                "hij"
            ]
        }

        const result = Reducers(undefined, Actions.getDetail(1, "abc", "abcdef", ["efg", "hij"]))

        expect(result).toEqual(expected)
    })
})
