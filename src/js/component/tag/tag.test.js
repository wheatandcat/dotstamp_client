// @flow
import React from "react"
import { shallow } from "enzyme"
import { Tag } from "./"

function setup() {
  const props = {
    label: "abc",
    onSearch: jest.fn()
  }

  const enzymeWrapper = shallow(<Tag {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/tag/tag", () => {
  it("表示", () => {
    setup()
  })

  it("on click Detle", () => {
    const { props, enzymeWrapper } = setup()

    enzymeWrapper.find("Link").simulate("click")
    expect(props.onSearch).toHaveBeenCalled()
  })
})
