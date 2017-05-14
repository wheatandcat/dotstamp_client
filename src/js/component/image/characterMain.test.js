// @flow
import React from "react"
import {shallow} from "enzyme"
import {CharacterMain} from "./"

function setup() :Object {
  const props = {
    fileName: "abc.png",
  }

  const enzymeWrapper = shallow(<CharacterMain {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/image/characterMain", () => {
  it("表示", () => {
    setup()
  })
})
