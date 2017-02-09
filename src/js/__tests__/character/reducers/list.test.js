import Actions from "../../../character/actions/list"
import Reducers from "../../../character/reducers/list"
import {IMAGE_DISPLAY_TYPE_CHARACTER, IMAGE_DISPLAY_TYPE_CHARACTER_FORM} from "../../../utils/image"


describe("CharacterReducersList", () => {
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
                    imageType: IMAGE_DISPLAY_TYPE_CHARACTER_FORM
                },
                {
                    ID: 2,
                    imageType: IMAGE_DISPLAY_TYPE_CHARACTER_FORM
                }
            ],
            imageType: IMAGE_DISPLAY_TYPE_CHARACTER,
            load: true,
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
                    imageType: IMAGE_DISPLAY_TYPE_CHARACTER_FORM
                },
                {
                    ID: 2,
                    FileName: "def.jpg",
                    imageType: IMAGE_DISPLAY_TYPE_CHARACTER_FORM
                }
            ],
            imageType: IMAGE_DISPLAY_TYPE_CHARACTER,
            load: true,
        }
        Reducers(undefined, Actions.getList(params.list, 4))
        const result = Reducers(undefined, Actions.setIcon(1))

        expect(result).toEqual(expected)
    })
})
