// @flow
import React from "react"
import { shallow } from "enzyme"
import { List } from "./"

function setup() {
  const props = {
    list: [
      {
        id: 1,
        fileName: "0.jpg",
        imageType: 2
      }
    ]
  }

  const enzymeWrapper = shallow(<List {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("ccomponents/slick/list", () => {
  it("表示", () => {
    setup()
  })
})
