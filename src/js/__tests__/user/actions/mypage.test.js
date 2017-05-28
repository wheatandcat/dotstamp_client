import { changeUserName } from "../../../redux/user/actions/mypage"
import * as types from "../../../constants/ActionTypes"

describe("user/actions/contributionList", () => {
  it("アイコンを設定する", () => {
    const expected = {
      type: types.CHANGE_USER_NAME,
      name: "abc"
    }
    const result = changeUserName("abc")

    expect(result).toEqual(expected)
  })
})
