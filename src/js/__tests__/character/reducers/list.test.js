import Actions from "../../../character/actions/list"
import Reducers from "../../../character/reducers/list"

describe("ReducersList", () => {
    it("リストを取得する", () => {
        const params = {
            list: {
                Image: [
                    {
                        ID: 1
                    },
                    {
                        ID: 2
                    }
                ]
            }
        }

        const expected = {
            icon: {
                id: 0,
                fileName: "",
                select: 0
            },
            list: [
                {
                    ID: 1,
                    imageType: 4
                },
                {
                    ID: 2,
                    imageType: 4
                }
            ],
            imageType: 4
        }

        const result = Reducers(undefined, Actions.getList(params.list, 4))


        expect(result).toEqual(expected)
    })

    it("アイコンを設定する", () => {
        const params = {
            list: {
                Image: [
                    {
                        ID: 1,
                        FileName: "abc.jpg"
                    },
                    {
                        ID: 2,
                        FileName: "def.jpg"
                    }
                ]
            }
        }
        const expected = {
            icon: {
                id: 1,
                fileName: "abc.jpg",
                select: 0
            },
            list: [
                {
                    ID: 1,
                    FileName: "abc.jpg",
                    imageType: 4
                },
                {
                    ID: 2,
                    FileName: "def.jpg",
                    imageType: 4
                }
            ],
            imageType: 4
        }
        Reducers(undefined, Actions.getList(params.list, 4))
        const result = Reducers(undefined, Actions.setIcon(1))

        expect(result).toEqual(expected)
    })
})
