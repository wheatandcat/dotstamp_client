// @flow
import React from "react"
import { shallow } from "enzyme"
import { NoIcon } from "./"

function setup() {
  const enzymeWrapper = shallow(<NoIcon />)

  return {
    enzymeWrapper
  }
}

describe("ccomponents/character/noIcon", () => {
  it("表示", () => {
    setup()
  })
})
