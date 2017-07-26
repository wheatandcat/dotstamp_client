// @flow
import React from "react"
import { shallow } from "enzyme"
import Public from "./public"

function setup(params: { disabled: boolean }) {
  const props = {
    disabled: params.disabled,
    onSave: jest.fn(),
    onChageStatus: jest.fn()
  }

  const enzymeWrapper = shallow(<Public {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/viewStatus/private", () => {
  it("enabled", () => {
    setup({ disabled: true })
  })

  it("disabled", () => {
    setup({ disabled: false })
  })

  it("on click chageStatus", () => {
    const { props, enzymeWrapper } = setup({ disabled: false })
    enzymeWrapper.find("MenuItem").at(1).simulate("click")
    expect(props.onChageStatus).toHaveBeenCalled()
  })

  it("on click save", () => {
    const { props, enzymeWrapper } = setup({ disabled: false })
    enzymeWrapper.find("Button").simulate("click")
    expect(props.onSave).toHaveBeenCalled()
  })
})
