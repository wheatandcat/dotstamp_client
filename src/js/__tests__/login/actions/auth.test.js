import {auth, logout} from "../../../login/actions/auth"
import * as types from "../../../constants/ActionTypes"

describe("login/actions/auth", () => {
  it("認証する", () => {
    const result = auth({
      Login: true,
      Name: "abc",
    })

    expect(result).toEqual({
      type: types.SET_LOGIN_AUTH,
      Login: true,
      Name: "abc",
    })
  })

  it("ログアウトする", () => {
    const result = logout()

    expect(result).toEqual({
      type: types.LOGOUT_LOGIN_AUTH,
    })
  })
})
