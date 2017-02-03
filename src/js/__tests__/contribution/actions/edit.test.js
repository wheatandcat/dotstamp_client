import Actions from "../../../contribution/actions/edit"

describe("ActionsList", () => {
    it("アクション:詳細を取得する", () => {
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

        const result = Actions.getDetail(1, "abc", "abcdef", ["efg", "hij"])

        expect(result).toEqual(expected)
    })
})
