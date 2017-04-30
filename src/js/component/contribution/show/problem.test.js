// @flow
import React from "react"
import {shallow} from "enzyme"
import {Problem} from "./"

function setup(params: Object) {
  const props = {
    problemType: params.problemType,
    send: params.send,
    show: params.show,
    onProblemType: jest.fn(),
    onHide: jest.fn(),
    onAdd: jest.fn(),
  }

  const enzymeWrapper = shallow(<Problem {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/show/problem", () => {
  it("表示", () => {
    setup({
      problemType: 1,
      send: false,
      show: true,
    })
  })

  it("send", () => {
    setup({
      problemType: 1,
      send: true,
      show: true,
    })
  })

  it("on change", () => {
    const { props, enzymeWrapper } = setup({
      problemType: 1,
      send: true,
      show: true,
    })

    enzymeWrapper.find("Radio").at(0).simulate("change")
    expect(props.onProblemType).toHaveBeenCalled()

    enzymeWrapper.find("Radio").at(1).simulate("change")
    expect(props.onProblemType).toHaveBeenCalled()
  })

  it("on click", () => {
    const { props, enzymeWrapper } = setup({
      problemType: 1,
      send: true,
      show: true,
    })

    enzymeWrapper.find("Button").simulate("click")
    expect(props.onAdd).toHaveBeenCalled()
  })

})
