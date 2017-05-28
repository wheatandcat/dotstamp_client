// @flow
import React from "react"
import { shallow } from "enzyme"
import Private from "./private"

function setup() {
  const props = {
    Title: "abc",
    User: {
      ID: 1,
      Name: "name",
      ProfileImageID: 0
    },
    UpdatedAt: "2015-01-01T07:12:00+09:00"
  }

  const enzymeWrapper = shallow(<Private {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("components/thumbnail/private", () => {
  it("表示", () => {
    setup()
  })
})
