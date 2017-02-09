import {initList, getList} from "../../../contribution/actions/list"

describe("ContributionActionsList", () => {
    it("リストの初期値", () => {
        const expected = {
            type: "GET_CONTRIBUTION_LIST",
            list: [],
            order: 0,
        }

        const result = initList()

        expect(result).toEqual(expected)
    })

    it("リストを取得する", () => {
        const expected = {
            type: "GET_CONTRIBUTION_LIST",
            list: [
                "abc",
                "edf"
            ],
            init: 1,
        }

        const result = getList(["abc", "edf"], 1)

        expect(result).toEqual(expected)
    })
})
