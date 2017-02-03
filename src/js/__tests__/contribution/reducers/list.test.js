import Actions from "../../../contribution/actions/list"
import Reducers from "../../../contribution/reducers/list"


describe("ReducersList", () => {
    it("リストを取得する", () => {
        const params = {
            list: [
                "abc",
                "edf"
            ]
        }
        const expected = {
            list: [
                "abc",
                "edf"
            ]
        }

        const result = Reducers(undefined, Actions.getList(params.list))

        expect(result).toEqual(expected)
    })
})
