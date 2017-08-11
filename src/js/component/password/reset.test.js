// @flow
import React from "react"
import { shallow } from "enzyme"
import Reset from "./reset"

function setup(params: { success: boolean, warning: boolean }) {
  const props = {
    email: "foo",
    keyword: "foo",
    success: params.success,
    warning: params.warning,
    message: "foo",
    onSave: jest.fn()
  }

  const enzymeWrapper = shallow(<Reset {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("omponent/password/reset", () => {
  it("表示", () => {
    setup({ success: false, warning: false })
  })

  it("success", () => {
    setup({ success: true, warning: false })
  })

  it("warning", () => {
    setup({ success: false, warning: true })
  })
})
