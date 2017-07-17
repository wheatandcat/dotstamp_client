// @flow
import React from "react"
import { shallow } from "enzyme"
import Private from "./private"

function setup() {
  const props = {
    title: "abc",
    user: {
      id: 1,
      name: "name",
      profileImageID: 0
    },
    updatedAt: "2015-01-01T07:12:00+09:00"
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
