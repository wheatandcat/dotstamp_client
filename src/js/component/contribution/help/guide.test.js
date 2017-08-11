// @flow
import React from "react"
import { shallow } from "enzyme"
import Guide from "./guide"

function setup(params: { open: boolean }) {
  const props = {
    open: params.open,
    onHide: jest.fn()
  }

  const enzymeWrapper = shallow(<Guide {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("contribution/help/guide", () => {
  it("表示", () => {
    setup({ open: true })
  })
})
