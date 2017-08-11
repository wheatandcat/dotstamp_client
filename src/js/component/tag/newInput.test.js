// @flow
import React from "react"
import { shallow } from "enzyme"
import NewInput from "./newInput"

function setup() {
  const props = {
    onTag: jest.fn()
  }

  const enzymeWrapper = shallow(<NewInput {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/mypage/newInput", () => {
  it("表示", () => {
    setup()
  })
})
