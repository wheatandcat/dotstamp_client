// @flow
import React from "react"
import { shallow } from "enzyme"
import Page from "./page"

function setup() {
  const enzymeWrapper = shallow(<Page />)

  return {
    enzymeWrapper
  }
}

describe("component/help/page", () => {
  it("表示", () => {
    setup()
  })
})
