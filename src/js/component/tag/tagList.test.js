// @flow
import React from "react"
import { shallow } from "enzyme"
import { TagList } from "./"

function setup() {
  const props = {
    list: [
      {
        ID: 1,
        Name: "abc"
      },
      {
        ID: 2,
        Name: "def"
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
