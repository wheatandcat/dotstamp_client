// @flow
import React from "react"
import { shallow } from "enzyme"
import { Action } from "./"

function setup(params: { disabled: boolean, cancel: boolean }) {
  const props = {
    cancel: params.cancel,
    disabled: params.disabled,
    onAdd: jest.fn(),
    onCancel: jest.fn(),
    onUpload: jest.fn()
  }

  const enzymeWrapper = shallow(<Action {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/about/link", () => {
  it("表示", () => {
    setup({ disabled: false, cancel: false })
  })

  it("disabled", () => {
    setup({ disabled: true, cancel: false })
  })

  it("cancel", () => {
    setup({ disabled: false, cancel: true })
  })

  it("on add", () => {
    const { props, enzymeWrapper } = setup({ disabled: true, cancel: true })

    enzymeWrapper.find("Button").at(0).simulate("click")
    expect(props.onAdd).toHaveBeenCalled()
  })

  it("on cancel", () => {
    const { props, enzymeWrapper } = setup({ disabled: true, cancel: true })

    enzymeWrapper.find("Button").at(1).simulate("click")
    expect(props.onCancel).toHaveBeenCalled()
  })
})
