// @flow
import React from "react"
import {shallow} from "enzyme"
import {Icon} from "./"

function setup(params) {
  const props = {
    ID: params.ID,
  }

  const enzymeWrapper = shallow(<Icon {...props}/>)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/icon/icon", () => {
  it("表示", () => {
    setup({ID: 1})
  })

  it("デフォルト表示", () => {
    setup({ID: 0})
  })
})
