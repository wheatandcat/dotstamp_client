// @flow
import React from "react"
import {shallow, mount} from "enzyme"
import {New} from "./"

function setup() {
  const props = {
    email: "abc",
    onNew: jest.fn()
  }

  const enzymeWrapper = shallow(<New {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/oauth/new", () => {
  it("表示", () => {
    setup()
  })

  it("on click", () => {
    const { props, enzymeWrapper } = setup()

    enzymeWrapper.find("Button").simulate("click")
    expect(props.onNew).toHaveBeenCalled()
  })

  it("mount", () => {
    const props = {
      email: "abc",
      onNew: jest.fn()
    }
    mount(<New {...props} />)
  })
})
