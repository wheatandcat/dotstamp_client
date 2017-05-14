// @flow
import React from "react"
import {shallow} from "enzyme"
import {Character} from "./"

function setup() :Object {
  const props = {
    fileName: "abc.png",
  }

  const enzymeWrapper = shallow(<Character {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/image/character", () => {
  it("表示", () => {
    setup()
  })
})
