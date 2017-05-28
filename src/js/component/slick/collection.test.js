// @flow
import React from "react"
import { shallow } from "enzyme"
import { Collection } from "./"

function setup(params: Object) {
  const props = {
    list: params.list,
    onClick: jest.fn()
  }

  const enzymeWrapper = shallow(<Collection {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("ccomponents/slick/collection", () => {
  it("list", () => {
    setup({
      list: [
        {
          ID: 1,
          FileName: "0.jpg",
          imageType: 2
        }
      ]
    })
  })

  it("slick", () => {
    setup({
      list: [
        {
          ID: 1,
          FileName: "0.jpg",
          imageType: 2
        },
        {
          ID: 2,
          FileName: "0.jpg",
          imageType: 2
        },
        {
          ID: 3,
          FileName: "0.jpg",
          imageType: 2
        },
        {
          ID: 4,
          FileName: "0.jpg",
          imageType: 2
        }
      ]
    })
  })
})
