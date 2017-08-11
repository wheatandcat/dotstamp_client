// @flow
import React from "react"
import { shallow } from "enzyme"
import Page from "./page"

function setup() {
  const props = {
    imageID: 1,
    onChangeImage: jest.fn(),
    name: "foo",
    onChangeeName: jest.fn(),
    onSave: jest.fn()
  }

  const enzymeWrapper = shallow(<Page {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/mypage/page", () => {
  it("表示", () => {
    setup()
  })
})
