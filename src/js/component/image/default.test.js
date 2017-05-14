// @flow
import React from "react"
import {shallow} from "enzyme"
import {Default} from "./"

function setup() :Object {
  const props = {
    fileName: "abc.png",
  }

  const enzymeWrapper = shallow(<Default {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/image/default", () => {
  it("表示", () => {
    setup()
  })
})
