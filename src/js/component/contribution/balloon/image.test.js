// @flow
import React from "react"
import { shallow } from "enzyme"
import Image from "./image"

function setup() {
  const props = {
    FileName: "0.png"
  }

  const enzymeWrapper = shallow(<Image {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/balloon/image", () => {
  it("表示", () => {
    setup()
  })
})
