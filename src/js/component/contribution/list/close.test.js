import React from "react"
import {shallow} from "enzyme"
import Close from "./close"

function setup() {
  const props = {
    ID: 1,
    onAdd: jest.fn(),
  }

  const enzymeWrapper = shallow(<Close {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("components/contribution/list/close", () => {
  it("表示", () => {
    setup()
  })

  it("on add", () => {
    const { props, enzymeWrapper } = setup()

    enzymeWrapper.find("Button").simulate("click")
    expect(props.onAdd).toHaveBeenCalled()
  })
})
