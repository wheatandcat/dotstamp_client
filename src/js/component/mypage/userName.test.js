// @flow
import React from "react"
import { shallow } from "enzyme"
import UserName from "./userName"

function setup() {
  const props = {
    name: "foo",
    onChange: jest.fn()
  }

  const enzymeWrapper = shallow(<UserName {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/mypage/userName", () => {
  it("表示", () => {
    setup()
  })
})
