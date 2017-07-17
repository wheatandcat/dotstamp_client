// @flow
import React from "react"
import { shallow } from "enzyme"
import EditText from "./editText"

function setup() {
  const props = {
    userFileName: "0.png",
    type: 1,
    talk: "abcdef",
    item: {
      body: "text"
    },
    priority: 1,
    onChangeText: jest.fn(),
    onDelete: jest.fn()
  }

  const enzymeWrapper = shallow(<EditText {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/balloon/editText", () => {
  it("表示", () => {
    setup()
  })

  it("on click Text", () => {
    const { props, enzymeWrapper } = setup()

    enzymeWrapper.find("Button").at(0).simulate("click")
    expect(props.onChangeText).toHaveBeenCalled()
  })

  it("on click Detle", () => {
    const { props, enzymeWrapper } = setup()

    enzymeWrapper.find("Button").at(1).simulate("click")
    expect(props.onDelete).toHaveBeenCalled()
  })
})
