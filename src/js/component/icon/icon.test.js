// @flow
import React from "react"
import { shallow } from "enzyme"
import { Icon } from "./"

function setup(params) {
  const props = {
    id: params.id
  }

  const enzymeWrapper = shallow(<Icon {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/icon/icon", () => {
  it("表示", () => {
    setup({ id: 1 })
  })

  it("デフォルト表示", () => {
    setup({ id: 0 })
  })
})
