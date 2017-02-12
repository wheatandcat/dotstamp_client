import * as types from "../../../constants/ActionTypes"
import reducer from "../../../user/reducers/mypage"

describe("user/reducers/contributionList", () => {
    it("ユーザを設定する", () => {
        const result = reducer(undefined, {
            type: types.SET_USER,
            response: {
                User: {
                    ID: 1,
                    Name: "abc",
                    ProfileImageID: 1,
                },
                Profile: [
                    {
                        ID: 1,
                        UserID: 1,
                        Created: "2015-10-10T10:00:00+09:00",
                    }
                ],
            }
        })

        expect(result).toEqual({
            User: {
                ID: 1,
                Name: "abc",
                ProfileImageID: 1,
            },
            Profile: [
                {
                    ID: 1,
                    UserID: 1,
                    Created: "2015-10-10T10:00:00+09:00",
                }
            ],
        })
    })

    it("ユーザ名を変更する", () => {
        const result = reducer(undefined, {
            type: types.CHANGE_USER_NAME,
            name: "def",
        })

        expect(result).toEqual({
            User: {
                ID: 0,
                Name: "def",
                ProfileImageID: 0,
            },
            Profile: [],
        })
    })
})
