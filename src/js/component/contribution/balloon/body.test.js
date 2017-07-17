// @flow
import React from "react"
import { shallow } from "enzyme"
import Body from "./body"

function setup(params: Object) {
  const props = {
    talkType: params.type,
    body: params.talk
  }

  const enzymeWrapper = shallow(<Body {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/balloon/body", () => {
  it("テキスト表示", () => {
    setup({
      type: 1,
      talk: "abc"
    })
  })

  it("画像表示", () => {
    setup({
      type: 2,
      talk: "0.png"
    })
  })
})
