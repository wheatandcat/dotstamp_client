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
          id: 1,
          fileName: "0.jpg",
          imageType: 2
        }
      ]
    })
  })

  it("slick", () => {
    setup({
      list: [
        {
          id: 1,
          fileName: "0.jpg",
          imageType: 2
        },
        {
          id: 2,
          fileName: "0.jpg",
          imageType: 2
        },
        {
          id: 3,
          fileName: "0.jpg",
          imageType: 2
        },
        {
          id: 4,
          fileName: "0.jpg",
          imageType: 2
        }
      ]
    })
  })
})
