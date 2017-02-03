import Actions from "../../../user/actions/contributionList"

describe("ActionsList", () => {
    it("user/actions/contributionList", () => {
        const expected = {
            type: "GET_USER_CONTRBUTION_LIST",
            list: [
                "abc",
                "def"
            ]
        }

        const result = Actions.getList(["abc", "def"])

        expect(result).toEqual(expected)
    })
})
