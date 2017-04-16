import * as types from "../../../constants/ActionTypes"
import reducer from "../../../login/reducers/auth"

describe("login/reducers/auth", () => {
  it("認証する", () => {
    const result = reducer(undefined, {
      type: types.SET_LOGIN_AUTH,
      response: {
        Login: true,
        Name: "abc",
      }
    })

    expect(result).toEqual({
      Login: true,
      Name: "abc",
    })
  })

  it("ログアウトする", () => {
    Object.defineProperty(window.location, "href", {
      writable: true,
      value: "some url"
    })

    const result = reducer(undefined, {
      type: types.LOGOUT_LOGIN_AUTH,
    })

    expect(result).toEqual({
      Login: false,
      Name: "",
    })
  })
})
