// @flow
import React from "react"
import { shallow } from "enzyme"
import Avatar from "./avatar"

function setup() {
  const props = {
    fileName: "0.png"
  }

  const enzymeWrapper = shallow(<Avatar {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/balloon/avatar", () => {
  it("表示", () => {
    setup()
  })
})
