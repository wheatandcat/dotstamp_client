// @flow
import React from "react"
import { shallow } from "enzyme"
import { Title } from "./"

function setup() {
  const props = {
    followElement: <div />,
    tags: [
      {
        id: 1,
        name: "abc"
      },
      {
        id: 2,
        name: "def"
      }
    ],
    title: "abc"
  }

  const enzymeWrapper = shallow(<Title {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/show/title", () => {
  it("表示", () => {
    setup()
  })
})
