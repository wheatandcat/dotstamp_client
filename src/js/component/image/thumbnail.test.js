// @flow
import React from "react"
import {shallow} from "enzyme"
import {Thumbnail} from "./"

function setup() :Object {
  const props = {
    dir: "/test",
    fileName: "abc.png",
  }

  const enzymeWrapper = shallow(<Thumbnail {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/image/talk", () => {
  it("表示", () => {
    setup()
  })
})
