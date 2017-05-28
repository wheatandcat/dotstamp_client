// @flow
import React from "react"
import { shallow } from "enzyme"
import { ScreenButton } from "./"

function setup(params: Object) {
  const props = {
    full: params.full,
    onFull: jest.fn(),
    onSmaill: jest.fn()
  }

  const enzymeWrapper = shallow(<ScreenButton {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("components/youtube/screenButton", () => {
  it("full", () => {
    const { props, enzymeWrapper } = setup({ full: true })

    enzymeWrapper.simulate("click")
    expect(props.onSmaill).toHaveBeenCalled()
  })

  it("small", () => {
    const { props, enzymeWrapper } = setup({ full: false })

    enzymeWrapper.simulate("click")
    expect(props.onFull).toHaveBeenCalled()
  })
})
