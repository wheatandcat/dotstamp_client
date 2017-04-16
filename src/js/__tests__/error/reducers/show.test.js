import * as types from "../../../constants/ActionTypes"
import reducer from "../../../error/reducers/show"


describe("error/reducers/show", () => {
  it("投稿リストを取得する", () => {
    const result = reducer(undefined, {
      type: types.SHOW_ERROR_MESSAGE,
      message: "abc",
      errCode: 1,
      show: true,
    })

    expect(result).toEqual({
      Message: "abc",
      ErrCode: 1,
      Show: true,
      BugReport: false,
      BugReported: false,
    })
  })
})
