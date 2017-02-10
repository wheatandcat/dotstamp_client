import Actions from "../../../character/actions/list"

describe("character/action", () => {
    it("アクション：リストを取得する", () => {
        const expected = {
            type: "GET_CHARACTER_LIST",
            list: [
                "abc",
                "edf"
            ],
            imageType: 4
        }

        const result = Actions.getList(["abc", "edf"], 4)

        expect(result).toEqual(expected)
    })

    it("アクション：アイコンを設定する", () => {
        const expected = {
            type: "SET_CHARACTER_ICON",
            icon: 1
        }

        const result = Actions.setIcon(1)

        expect(result).toEqual(expected)
    })
})
