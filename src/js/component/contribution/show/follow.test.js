// @flow
import React from "react"
import { shallow } from "enzyme"
import { Follow } from "./"

function setup(params: Object) {
  const props = {
    count: 1,
    actived: params.actived,
    disabled: params.disabled,
    onAdd: jest.fn(),
    onDelete: jest.fn()
  }

  const enzymeWrapper = shallow(<Follow {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/show/follow", () => {
  it("表示", () => {
    setup({
      actived: false,
      disabled: false
    })
  })

  it("actived", () => {
    setup({
      actived: true,
      disabled: false
    })
  })

  it("disabled", () => {
    setup({
      actived: false,
      disabled: true
    })
  })

  it("on click add", () => {
    const { props, enzymeWrapper } = setup({
      actived: false,
      disabled: false
    })

    enzymeWrapper.find("Button").simulate("click")
    expect(props.onAdd).toHaveBeenCalled()
  })

  it("on click delete", () => {
    const { props, enzymeWrapper } = setup({
      actived: true,
      disabled: false
    })

    enzymeWrapper.find("Button").simulate("click")
    expect(props.onDelete).toHaveBeenCalled()
  })
})
