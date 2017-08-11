// @flow
import React from "react"
import { shallow } from "enzyme"
import AddForm from "./addForm"

type Tag = {
  id: number,
  name: string
}

function setup(params: { tags: Array<Tag> }) {
  const props = {
    tags: params.tags,
    onAdd: jest.fn(),
    onDelete: jest.fn()
  }

  const enzymeWrapper = shallow(<AddForm {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/mypage/userName", () => {
  it("表示", () => {
    setup({
      tags: [
        {
          id: 1,
          name: "foo"
        },
        {
          id: 2,
          name: "bar"
        }
      ]
    })
  })

  it("tag max length", () => {
    setup({
      tags: [
        {
          id: 1,
          name: "foo"
        },
        {
          id: 2,
          name: "bar"
        },
        {
          id: 3,
          name: "foobar"
        }
      ]
    })
  })
})
