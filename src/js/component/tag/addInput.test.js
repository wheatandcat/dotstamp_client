// @flow
import React from "react"
import { shallow } from "enzyme"
import AddInput from "./addInput"

function setup() {
  const props = {
    onAdd: jest.fn()
  }

  const enzymeWrapper = shallow(<AddInput {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/mypage/addInput", () => {
  it("表示", () => {
    setup()
  })
})
