// @flow
import React from "react"
import { shallow } from "enzyme"
import Status from "./status"

function setup(params: { viewStatus: number, disabled: boolean }) {
  const props = {
    viewStatus: params.viewStatus,
    disabled: params.disabled,
    onChageStatus: jest.fn(),
    onPublic: jest.fn(),
    onPrivate: jest.fn()
  }

  const enzymeWrapper = shallow(<Status {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/viewStatus/private", () => {
  it("view status public", () => {
    setup({ viewStatus: 1, disabled: false })
  })

  it("view status private", () => {
    setup({ viewStatus: 2, disabled: false })
  })

  it("disabled", () => {
    setup({ viewStatus: 2, disabled: true })
  })
})
