import {setContribution} from "../../../user/actions/contributionList"
import * as types from "../../../constants/ActionTypes"

describe("user/actions/contributionList", () => {
    it("投稿IDを設定する", () => {
        const expected = {
            type: types.SET_USER_CONTRBUTION_LIST,
            contributionId: 1,
        }
        const result = setContribution(1)

        expect(result).toEqual(expected)
    })
})
