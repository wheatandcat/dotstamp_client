// @flow
import React from "react"
import {shallow} from "enzyme"
import {Icon} from "./"

function setup() :Object {
  const props = {
    fileName: "abc.png",
  }

  const enzymeWrapper = shallow(<Icon {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/image/icon", () => {
  it("表示", () => {
    setup()
  })
})
