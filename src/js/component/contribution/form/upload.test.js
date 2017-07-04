// @flow
import React from "react"
import { mount, shallow } from "enzyme"
import { MemoryRouter } from "react-router"
import Upload from "./upload"

function setup(params: { disabled: boolean }) {
  const props = {
    disabled: params.disabled,
    onChange: jest.fn()
  }

  const enzymeWrapper = shallow(<Upload {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/form/upload", () => {
  it("表示", () => {
    setup({ disabled: false })
  })

  it("disabled", () => {
    setup({ disabled: true })
  })

  it("mount", () => {
    const props = {
      disabled: true,
      onChange: jest.fn()
    }

    mount(
      <MemoryRouter initialEntries={["/"]}>
        <Upload {...props} />
      </MemoryRouter>
    )
  })
})
