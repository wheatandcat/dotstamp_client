// @flow
import React from "react"
import { shallow } from "enzyme"
import { Form } from "./"
// flow-disable-line
import { __RewireAPI__ } from "./form"

function setup(params: Object) {
  const props = {
    videoId: params.videoId
  }

  const enzymeWrapper = shallow(<Form {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("components/youtube/form", () => {
  it("videoIdが空", () => {
    setup({
      videoId: ""
    })
  })

  it("表示", () => {
    setup({
      videoId: "abc"
    })
  })

  it("no target", () => {
    const enzymeWrapper = shallow(<Form videoId="123" />)
    const instance: Form = enzymeWrapper.instance()

    instance.play()
  })

  it("control", () => {
    const enzymeWrapper = shallow(<Form videoId="123" />)
    const instance: Form = enzymeWrapper.instance()
    __RewireAPI__.__set__("target", {
      playVideo() {},
      pauseVideo() {}
    })

    instance.play()
    instance.pause()
    instance.onReady({
      target: {}
    })
    instance.onEnd()
    instance.onScreen()
    instance.offScreen()
  })
})
