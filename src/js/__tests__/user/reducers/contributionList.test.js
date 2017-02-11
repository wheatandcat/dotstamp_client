import * as types from "../../../constants/ActionTypes"
import reducer from "../../../user/reducers/contributionList"

describe("user/reducers/contributionList", () => {
    it("投稿リストを取得する", () => {
        const result = reducer(undefined, {
            type: types.GET_USER_CONTRBUTION_LIST,
            response: [
                {
                    ID: 1,
                },
                {
                    ID: 2,
                }
            ]
        })

        expect(result).toEqual({
            contributionId: 1,
            list:[
                {
                    ID: 1,
                },
                {
                    ID: 2,
                }
            ]
        })
    })
})
