// @flow
import React from "react"
import { shallow } from "enzyme"
import { Page } from "./"

function setup(params: { isAlert: boolean }) {
  const props = {
    email: "abc",
    onNew: jest.fn(),
    isAlert: params.isAlert,
    message: ""
  }

  const enzymeWrapper = shallow(<Page {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/oauth/page", () => {
  it("表示", () => {
    setup({ isAlert: false })
  })

  it("alert", () => {
    setup({ isAlert: true })
  })
})
