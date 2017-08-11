// @flow
import React from "react"
import { shallow } from "enzyme"
import Input from "./input"

function setup(params: { success: boolean, warning: boolean }) {
  const props = {
    success: params.success,
    warning: params.warning,
    message: "foo",
    onAdd: jest.fn()
  }

  const enzymeWrapper = shallow(<Input {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/mypage/userName", () => {
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
