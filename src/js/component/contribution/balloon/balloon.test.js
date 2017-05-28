// @flow
import React from "react"
import { shallow } from "enzyme"
import Balloon from "./balloon"

function setup(params: Object) {
  const props = {
    UserFileName: "0.png",
    Type: params.Type,
    Talk: params.Talk
  }

  const enzymeWrapper = shallow(<Balloon {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/balloon/balloon", () => {
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
