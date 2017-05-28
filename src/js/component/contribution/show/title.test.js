// @flow
import React from "react"
import { shallow } from "enzyme"
import { Title } from "./"

function setup() {
  const props = {
    followElement: <div />,
    tagList: [
      {
        ID: 1,
        Name: "abc"
      },
      {
        ID: 2,
        Name: "def"
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
