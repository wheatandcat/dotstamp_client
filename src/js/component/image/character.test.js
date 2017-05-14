// @flow
import React from "react"
import {shallow} from "enzyme"
import {Character} from "./"

function setup(params: Object) :Object {
  const props = {
    fileName: "abc.png",
    size: params.size,
  }

  const enzymeWrapper = shallow(<Character {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/image/character", () => {
  it("表示", () => {
    setup({size: ""})
  })

  it("small", () => {
    setup({size: "small"})
  })
})
