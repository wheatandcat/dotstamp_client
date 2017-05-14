// @flow
import React from "react"
import {shallow} from "enzyme"
import {Page} from "./"

function setup() {
  const props = {
    email: "abc",
    onNew: jest.fn()
  }

  const enzymeWrapper = shallow(<Page {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/oauth/page", () => {
  it("表示", () => {
    setup()
  })
})
