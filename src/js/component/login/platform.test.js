// @flow
import React from "react"
import {shallow} from "enzyme"
import {Platform} from "./"

function setup() {
  const props = {
    onGoogle: jest.fn(),
    onTwitter: jest.fn(),
    onFacebook: jest.fn(),
  }

  const enzymeWrapper = shallow(<Platform {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/login/platform", () => {
  it("表示", () => {
    setup()
  })

  it("on click google", () => {
    const { props, enzymeWrapper } = setup()

    enzymeWrapper.find("Button").at(0).simulate("click")
    expect(props.onGoogle).toHaveBeenCalled()
  })

  it("on click twitter", () => {
    const { props, enzymeWrapper } = setup()

    enzymeWrapper.find("Button").at(1).simulate("click")
    expect(props.onTwitter).toHaveBeenCalled()
  })

  it("on click facebook", () => {
    const { props, enzymeWrapper } = setup()

    enzymeWrapper.find("Button").at(2).simulate("click")
    expect(props.onFacebook).toHaveBeenCalled()
  })
})
