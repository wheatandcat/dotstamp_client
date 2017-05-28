// @flow
import React from "react"
import { shallow } from "enzyme"
import { Platform } from "./"

function setup() {
  const props = {}

  const enzymeWrapper = shallow(<Platform {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/login/platform", () => {
  it("表示", () => {
    setup()
  })
})
