// @flow
import React from "react"
import { shallow } from "enzyme"
import { Timer } from "./"

function setup() {
  const props = {
    timer: "foo"
  }

  const enzymeWrapper = shallow(<Timer {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/timer/timer", () => {
  it("表示", () => {
    setup()
  })
})
