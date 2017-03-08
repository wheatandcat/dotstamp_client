import * as types from "../../../constants/ActionTypes"
import reducer from "../../../contribution/reducers/list"

describe("contribution/reducers/list", () => {
    it("リストを取得する", () => {
        const expected = {
            type: types.GET_CONTRIBUTION_LIST,
            response: [
                {
                    id: 1,
                    body: "abc",
                },
                {
                    id: 2,
                    body: "def"
                }
            ],
            receiveParam: {
                init: true
            }
        }

        const result = reducer(undefined, expected)

        expect(result).toEqual({
            list: [
                {
                    id: 1,
                    body: "abc",
                },
                {
                    id: 2,
                    body: "def"
                }
            ],
            order: 1,
            next: true,
            init: true,
            itemMap: {},
        })
    })

    it("アイテムを追加する", () => {
        expect(
            reducer(
                undefined,
                {
                    type: types.ADD_CONTRIBUTION_LIST_ITEM,
                    response: {
                        ID: 1,
                        Title: "abc",
                        Body: "def",
                        Tag:[
                            {
                                ID: 1,
                                Name: "abc"
                            }
                        ]
                    },
                }
            )
        ).toEqual({
            list: [
                {
                    id: 1,
                    body: "abc",
                },
                {
                    id: 2,
                    body: "def"
                }
            ],
            order: 1,
            next: true,
            init: true,
            itemMap: {
                1: {
                    title: "abc",
                    body: "def",
                    tagList: [
                        {
                            ID: 1,
                            Name: "abc"
                        }
                    ]
                }
            },
        })
    })

    it("アイテムを削除する", () => {
        expect(
            reducer(
                undefined,
                {
                    type: types.DELETE_CONTRIBUTION_LIST_ITEM,
                    id: 1,
                }
            )
        ).toEqual({
            list: [
                {
                    id: 1,
                    body: "abc",
                },
                {
                    id: 2,
                    body: "def"
                }
            ],
            order: 1,
            next: true,
            init: true,
            itemMap: {},
        })
    })
})
