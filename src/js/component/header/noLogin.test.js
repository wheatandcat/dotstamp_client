// @flow
import React from "react"
import { shallow } from "enzyme"
import NoLogin from "./noLogin"

function setup() {
  const enzymeWrapper = shallow(<NoLogin />)

  return {
    enzymeWrapper
  }
}

describe("omponent/header/noLogin", () => {
  it("render", () => {
    setup()
  })
})
