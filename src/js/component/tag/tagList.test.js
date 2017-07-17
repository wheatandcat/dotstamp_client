// @flow
import React from "react"
import { shallow } from "enzyme"
import { TagList } from "./"

function setup() {
  const props = {
    list: [
      {
        id: 1,
        name: "abc"
      },
      {
        id: 2,
        name: "def"
      }
    ],
    onSearch: jest.fn()
  }

  const enzymeWrapper = shallow(<TagList {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/tag/tagList", () => {
  it("表示", () => {
    setup()
  })
})
