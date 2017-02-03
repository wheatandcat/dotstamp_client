import Actions from "../../../contribution/actions/list"

describe("ActionsList", () => {
    it("アクション：リストの初期値", () => {
        const expected = {
            type: "GET_CONTRIBUTION_LIST",
            list: []
        }

        const result = Actions.initList()

        expect(result).toEqual(expected)
    })

    it("アクション：リストを取得する", () => {
        const expected = {
            type: "GET_CONTRIBUTION_LIST",
            list: [
                "abc",
                "edf"
            ]
        }

        const result = Actions.getList(["abc", "edf"])

        expect(result).toEqual(expected)
    })
})
