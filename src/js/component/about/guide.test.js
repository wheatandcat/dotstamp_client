// @flow
import React from "react"
import { shallow } from "enzyme"
import { Guide } from "./"

function setup() {
  const enzymeWrapper = shallow(<Guide />)

  return {
    enzymeWrapper
  }
}

describe("component/about/guide", () => {
  it("表示", () => {
    setup()
  })
})
