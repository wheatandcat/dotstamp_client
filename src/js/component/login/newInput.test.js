// @flow
import React from "react"
import {shallow, mount} from "enzyme"
import {MemoryRouter} from "react-router"
import {NewInput} from "./"

function setup() {
  const props = {
    onNew: jest.fn(),
    onOpen: jest.fn(),
    onGoogle: jest.fn(),
    onTwitter: jest.fn(),
    onFacebook: jest.fn(),
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
    instance.email = {
      value: "abc",
    }
    instance.password = {
      value: "abc",
    }

    enzymeWrapper.find("Button").at(1).simulate("click")
    expect(props.onNew).toHaveBeenCalled()
  })

  it("mount", () => {
    const props = {
      onNew: jest.fn(),
      onOpen: jest.fn(),
      onGoogle: jest.fn(),
      onTwitter: jest.fn(),
      onFacebook: jest.fn(),
    }

    mount(<MemoryRouter initialEntries={["/"]}><NewInput {...props} /></MemoryRouter>)
  })
})
