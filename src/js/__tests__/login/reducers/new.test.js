import * as types from "../../../constants/ActionTypes"
import reducer from "../../../redux/login/reducers/new"

describe("login/reducers/new", () => {
  it("ユーザ設定する", () => {
    Object.defineProperty(window.location, "href", {
      writable: true,
      value: "some url"
    })

    const result = reducer(undefined, {
      type: types.SET_LOGIN_USER,
      response: {
        state: 1
      }
    })

    expect(result).toEqual({
      state: 1
    })
  })
})
