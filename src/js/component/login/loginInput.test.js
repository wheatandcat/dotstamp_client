// @flow
import React from "react"
import {shallow, mount} from "enzyme"
import {MemoryRouter} from "react-router"
import {LoginInput} from "./"

function setup() {
  const props = {
    onLogin: jest.fn(),
    onGoogle: jest.fn(),
    onTwitter: jest.fn(),
    onFacebook: jest.fn(),
  }

  const enzymeWrapper = shallow(<LoginInput {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/login/loginInput", () => {
  it("表示", () => {
    setup()
  })

  it("on click login", () => {
    const { props, enzymeWrapper } = setup()
    const instance: Object = enzymeWrapper.instance()
    instance.email = {
      value: "abc",
    }
    instance.password = {
      value: "abc",
    }

    enzymeWrapper.find("Button").at(0).simulate("click")
    expect(props.onLogin).toHaveBeenCalled()
  })

  it("mount", () => {
    const props = {
      onLogin: jest.fn(),
      onGoogle: jest.fn(),
      onTwitter: jest.fn(),
      onFacebook: jest.fn(),
    }

    mount(<MemoryRouter initialEntries={["/"]}><LoginInput {...props} /></MemoryRouter>)
  })
})
