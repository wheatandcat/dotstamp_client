// @flow
import React from "react"
import { mount, shallow } from "enzyme"
import { MemoryRouter } from "react-router"
import Text from "./text"

function setup(params: { edit: boolean, body: string }) {
  const props = {
    edit: params.edit,
    body: params.body,
    onChange: jest.fn()
  }

  const enzymeWrapper = shallow(<Text {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/form/text", () => {
  it("表示", () => {
    setup({ edit: false, body: "foo" })
  })

  it("edit", () => {
    setup({ edit: true, body: "foo" })
  })

  it("on change", () => {
    const { props, enzymeWrapper } = setup({ edit: true, body: "" })
    const instance: Object = enzymeWrapper.instance()
    instance.body = {
      value: "bar"
    }
    instance.render()
    enzymeWrapper.find("textarea").simulate("change", null, "foo")
    expect(props.onChange).toHaveBeenCalled()
  })

  it("mount", () => {
    const props = {
      edit: true,
      body: "foo",
      onChange: jest.fn()
    }

    mount(
      <MemoryRouter initialEntries={["/"]}>
        <Text {...props} />
      </MemoryRouter>
    )
  })
})
