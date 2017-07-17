// @flow
import React from "react"
import { shallow } from "enzyme"
import Text from "./text"

function setup() {
  const props = {
    label: "abc\ndef"
  }

  const enzymeWrapper = shallow(<Text {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/balloon/text", () => {
  it("表示", () => {
    setup()
  })
})
