import Actions from "../../../user/actions/contributionList"
import Reducers from "../../../user/reducers/contributionList"

describe("user/reducers/contributionList", () => {
    it("投稿リストを取得する", () => {
        const expected = {
            contributionId: 0,
            list: [
                "abc",
                "def"
            ]
        }

        const result = Reducers(undefined, Actions.getList(["abc", "def"]))

        expect(result).toEqual(expected)
    })
})
