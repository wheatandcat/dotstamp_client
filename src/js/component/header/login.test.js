// @flow
import React from "react"
import { shallow } from "enzyme"
import Login from "./login"

function setup() {
  const props = {
    name: "foo",
    logout: jest.fn()
  }

  const enzymeWrapper = shallow(<Login {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("omponent/header/login", () => {
  it("render", () => {
    setup()
  })

  it("on click", () => {
    const { props, enzymeWrapper } = setup()
    enzymeWrapper.find("MenuItem").at(5).simulate("click")
    expect(props.logout).toHaveBeenCalled()
  })
})
