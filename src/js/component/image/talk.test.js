// @flow
import React from "react"
import {shallow} from "enzyme"
import {Talk} from "./"

function setup() :Object {
  const props = {
    fileName: "abc.png",
  }

  const enzymeWrapper = shallow(<Talk {...props}/>)

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
