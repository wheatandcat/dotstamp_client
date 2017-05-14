// @flow
import React from "react"
import {shallow} from "enzyme"
import {Image} from "./"

function setup() :Object {
  const props = {
    dir: "/test",
    fileName: "abc.png",
  }

  const enzymeWrapper = shallow(<Image {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/image/image", () => {
  it("表示", () => {
    setup()
  })
})
