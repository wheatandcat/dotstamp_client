// @flow
import React from "react"
import { shallow } from "enzyme"
import { Title } from "./"

function setup() {
  const enzymeWrapper = shallow(<Title>foo</Title>)

  return {
    enzymeWrapper
  }
}

describe("component/about/title", () => {
  it("表示", () => {
    setup()
  })
})
