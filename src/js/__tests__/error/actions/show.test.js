import {showError, closeError, openBugReport} from "../../../error/actions/show"
import * as types from "../../../constants/ActionTypes"

describe("error/actions/show", () => {
  it("エラーを表示する", () => {
    const expected = {
      type: types.SHOW_ERROR_MESSAGE,
      message: "abc",
      errCode: 1,
      show: true,
    }
    const result = showError({
      Message: "abc",
      ErrCode: 1,
    })

    expect(result).toEqual(expected)
  })

  it("エラーを閉じる", () => {
    const expected = {
      type: types.CLOSE_ERROR_MESSAGE,
      show: false,
    }
    const result = closeError()

    expect(result).toEqual(expected)
  })

  it("エラー報告を開く", () => {
    const expected = {
      type: types.OPEN_ERROR_BUG_REPORT,
      bugReport: true,
    }
    const result = openBugReport()

    expect(result).toEqual(expected)
  })
})
