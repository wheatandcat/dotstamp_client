// @flow
import React from "react"
import { shallow } from "enzyme"
import { Page } from "./"

function setup() {
  const enzymeWrapper = shallow(<Page />)

  return {
    enzymeWrapper
  }
}

describe("component/about/page", () => {
  it("表示", () => {
    setup()
  })
})
