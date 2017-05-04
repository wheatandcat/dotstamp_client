// @flow
import React from "react"
import {shallow} from "enzyme"
import {Play} from "./"

function setup() {
  const props = {
    label: "abc",
    onPause: jest.fn(),
  }

  const enzymeWrapper = shallow(<Play {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("components/youtube/play", () => {
  it("表示", () => {
    setup()
  })

  it("on click", () => {
    const { props, enzymeWrapper } = setup()

    enzymeWrapper.simulate("click")
    expect(props.onPause).toHaveBeenCalled()
  })
})
