// @flow
import React from "react"
import { shallow } from "enzyme"
import { Video } from "./"

function setup(params: Object) {
  const props = {
    open: params.open,
    videoId: "abc",
    onReady: jest.fn(),
    onEnd: jest.fn()
  }

  const enzymeWrapper = shallow(<Video {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("components/youtube/video", () => {
  it("open", () => {
    setup({
      open: true
    })
  })

  it("close", () => {
    setup({
      open: false
    })
  })
})
