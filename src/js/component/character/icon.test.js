// @flow
import React from "react"
import { shallow } from "enzyme"
import { Icon } from "./"

function setup() {
  const props = {
    fileName: "0.png",
    IconId: 1,
    onDelete: jest.fn()
  }

  const enzymeWrapper = shallow(<Icon {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("components/character/icon", () => {
  it("表示", () => {
    setup()
  })

  it("on click ", () => {
    const { props, enzymeWrapper } = setup()

    enzymeWrapper.find("Button").simulate("click")
    expect(props.onDelete).toHaveBeenCalled()
  })
})
