// @flow
import React from "react"
import { shallow } from "enzyme"
import Tags from "./tags"

function setup(params: { contributionId?: number }) {
  const props = {
    contributionId: params.contributionId,
    add: jest.fn(),
    change: jest.fn(),
    remove: jest.fn(),
    tags: [{ id: 1, name: "foo" }]
  }

  const enzymeWrapper = shallow(<Tags {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/header/tags", () => {
  it("表示", () => {
    setup({})
  })

  it("set contributionId", () => {
    setup({ contributionId: 1 })
  })
})
