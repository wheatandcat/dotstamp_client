// @flow
import React from "react"
import { shallow } from "enzyme"
import Page from "./page"

function setup(params: { login: boolean }) {
  const props = {
    login: params.login,
    name: "foo",
    logout: jest.fn()
  }

  const enzymeWrapper = shallow(<Page {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("omponent/header/page", () => {
  it("login", () => {
    setup({ login: true })
  })

  it("no login", () => {
    setup({ login: false })
  })
})
