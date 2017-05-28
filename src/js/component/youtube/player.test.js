// @flow
import React from "react"
import { shallow } from "enzyme"
import { Player } from "./"
import { PLAY, PAUSE, FINISHED } from "./player"

function setup(params: Object) {
  const props = {
    status: params.status,
    onPlay: jest.fn(),
    onPause: jest.fn()
  }

  const enzymeWrapper = shallow(<Player {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("components/youtube/player", () => {
  it("PLAY", () => {
    setup({ status: PLAY })
  })

  it("PAUSE", () => {
    setup({ status: PAUSE })
  })

  it("FINISHED", () => {
    setup({ status: FINISHED })
  })
})
