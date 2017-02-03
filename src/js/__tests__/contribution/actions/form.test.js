import Actions from "../../../contribution/actions/form"

describe("ActionsList", () => {
    it("アクション：本文を追加する", () => {
        const params = {
            character: {
                ID: 1,
                FileName: "abc"
            },
            body: "def",
            directionType: 1,
            talkType: 1
        }

        const expected = {
            type: "ADD_CONTRIBUTION_BODY",
            character: {
                ID: 1,
                FileName: "abc"
            },
            body: "def",
            directionType: 1,
            talkType: 1
        }

        const result = Actions.addBody(params.body, params.character, params.directionType, params.talkType)

        expect(result).toEqual(expected)
    })

    it("アクション：本文を編集する", () => {
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
            type: "EDIT_CONTRIBUTION_BODY",
            character: {
                ID: 1,
                FileName: "abc"
            },
            body: "def",
            directionType: 1,
            priority: 1
        }

        const result = Actions.editBody(params.body, params.character, params.directionType, params.priority)

        expect(result).toEqual(expected)
    })

    it("アクション：本文を編集する", () => {
        const params = {
            character: {
                ID: 1,
                FileName: "abc"
            }
        }

        const expected = {
            type: "CHANGE_CONTRIBUTION_CHARACTER",
            character: {
                ID: 1,
                FileName: "abc"
            }
        }

        const result = Actions.changeCharacter(params.character)

        expect(result).toEqual(expected)
    })

    it("アクション：本文を変更する", () => {
        const params = {
            body: "def"
        }

        const expected = {
            type: "CHANGE_CONTRIBUTION_BODY",
            body: "def"
        }

        const result = Actions.changeBody(params.body)

        expect(result).toEqual(expected)
    })

    it("アクション：タイトルを変更する", () => {
        const params = {
            title: "abc"
        }

        const expected = {
            type: "CHANGE_CONTRIBUTION_TITLE",
            title: "abc"
        }

        const result = Actions.changeTitle(params.title)

        expect(result).toEqual(expected)
    })

    it("アクション：タグを変更する", () => {
        const params = {
            tag: "abc"
        }

        const expected = {
            type: "CHANGE_CONTRIBUTION_TAG",
            tag: "abc"
        }

        const result = Actions.changeTag(params.tag)

        expect(result).toEqual(expected)
    })
})
