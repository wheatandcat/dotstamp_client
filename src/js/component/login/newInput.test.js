// @flow
import React from "react"
import {shallow} from "enzyme"
import {NewInput} from "./"

function setup() {
  const props = {
    onNew: jest.fn(),
    onOpen: jest.fn(),
  }

  const enzymeWrapper = shallow(<NewInput {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/login/newInput", () => {
  it("表示", () => {
    setup()
  })

  it("on click open", () => {
    const { props, enzymeWrapper } = setup()

    enzymeWrapper.find("Button").at(0).simulate("click")
    expect(props.onOpen).toHaveBeenCalled()
  })

  it("on click new", () => {
    const { props, enzymeWrapper } = setup()
    const instance: Object = enzymeWrapper.instance()
    instance.refs = {
      email: {
        value: "abc",
      },
      password: {
        value: "abc",
      },
    }

    enzymeWrapper.find("Button").at(1).simulate("click")
    expect(props.onNew).toHaveBeenCalled()
  })
})
