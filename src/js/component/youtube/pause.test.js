// @flow
import React from "react"
import { shallow } from "enzyme"
import { Pause } from "./"

function setup() {
  const props = {
    label: "abc",
    onPlay: jest.fn()
  }

  const enzymeWrapper = shallow(<Pause {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("components/youtube/pause", () => {
  it("表示", () => {
    setup()
  })

  it("on click", () => {
    const { props, enzymeWrapper } = setup()

    enzymeWrapper.simulate("click")
    expect(props.onPlay).toHaveBeenCalled()
  })
})
