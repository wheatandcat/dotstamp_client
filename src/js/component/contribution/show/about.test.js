// @flow
import React from "react"
import { shallow } from "enzyme"
import { About } from "./"

function setup() {
  const props = {
    profileImageID: 1,
    userName: "abc",
    updatedAt: "2015-01-01T07:12:00+09:00",
    openProblem: jest.fn()
  }

  const enzymeWrapper = shallow(<About {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/show/about", () => {
  it("表示", () => {
    setup()
  })

  it("on click", () => {
    const { props, enzymeWrapper } = setup()

    enzymeWrapper.find("MenuItem").simulate("click")
    expect(props.openProblem).toHaveBeenCalled()
  })
})
