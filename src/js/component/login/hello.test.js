// @flow
import React from "react"
import { shallow } from "enzyme"
import { Hello } from "./"

function setup() {
  const props = {
    text: "abc"
  }

  const enzymeWrapper = shallow(<Hello {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/login/heloo", () => {
  it("表示", () => {
    setup({ ID: 1 })
  })
})
