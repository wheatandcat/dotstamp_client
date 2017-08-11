// @flow
import React from "react"
import { shallow } from "enzyme"
import Menu from "./menu"

function setup() {
  const enzymeWrapper = shallow(<Menu />)

  return {
    enzymeWrapper
  }
}

describe("component/help/page", () => {
  it("表示", () => {
    setup()
  })
})
