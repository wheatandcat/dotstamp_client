// @flow
import React from "react"
import {shallow} from "enzyme"
import {LoginInput} from "./"

function setup() {
  const props = {
    onLogin: jest.fn(),
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
    instance.refs = {
      email: {
        value: "abc",
      },
      password: {
        value: "abc",
      },
    }

    enzymeWrapper.find("Button").at(0).simulate("click")
    expect(props.onLogin).toHaveBeenCalled()
  })
})
