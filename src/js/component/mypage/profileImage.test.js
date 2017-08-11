// @flow
import React from "react"
import { shallow } from "enzyme"
import ProfileImage from "./profileImage"

function setup() {
  const props = {
    imageID: 1,
    onChange: jest.fn()
  }

  const enzymeWrapper = shallow(<ProfileImage {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/mypage/profileImage", () => {
  it("表示", () => {
    setup()
  })
})
