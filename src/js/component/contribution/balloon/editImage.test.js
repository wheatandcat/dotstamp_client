// @flow
import React from "react"
import {shallow} from "enzyme"
import EditImage from "./editImage"

function setup() {
  const props = {
    UserFileName: "0.png",
    Type: 2,
    Talk: "0.png",
    Priority: 1,
    onChangeImage: jest.fn(),
    onDelete: jest.fn(),
  }

  const enzymeWrapper = shallow(<EditImage {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/balloon/editImage", () => {
  it("表示", () => {
    setup()
  })

  it("on click Detle", () => {
    const { props, enzymeWrapper } = setup()

    enzymeWrapper.find("Button").at(1).simulate("click")
    expect(props.onDelete).toHaveBeenCalled()
  })
})
