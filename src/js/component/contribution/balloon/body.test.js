// @flow
import React from "react"
import { shallow } from "enzyme"
import Body from "./body"

function setup(params: Object) {
  const props = {
    TalkType: params.Type,
    Body: params.Talk
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
      Type: 1,
      Talk: "abc"
    })
  })

  it("画像表示", () => {
    setup({
      Type: 2,
      Talk: "0.png"
    })
  })
})
