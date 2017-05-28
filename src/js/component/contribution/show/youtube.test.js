// @flow
import React from "react"
import { shallow } from "enzyme"
import { Youtube } from "./"

function setup() {
  const props = {
    movieID: ""
  }

  const enzymeWrapper = shallow(<Youtube {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/show/youtube", () => {
  it("表示", () => {
    setup()
  })
})
