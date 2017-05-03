// @flow
import React from "react"
import {mount} from "enzyme"
import {Slick} from "./"

import { __RewireAPI__ } from "./Slick"
const action = __RewireAPI__.__get__("action")

function setup(params :Object) {
  const props = {
    list: params.list,
    defaultValue: 0,
    onClick: jest.fn(),
  }

  const enzymeWrapper = mount(<Slick {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("components/slick/slick.action", () => {
  it("push key", () => {
    const { enzymeWrapper } = setup({
      list :[
        {
          ID: 1,
          FileName: "0.jpg",
          imageType: 2,
        },
        {
          ID: 2,
          FileName: "0.jpg",
          imageType: 2,
        },
      ]
    })

    const instance: Slick = enzymeWrapper.instance()
    __RewireAPI__.__set__("self", instance)

    action({
      shiftKey: true,
      keyCode: 39,
    })

    action({
      shiftKey: true,
      keyCode: 37,
    })

    action({
      shiftKey: true,
      keyCode: 38,
      altKey: true,
    })

    action({
      shiftKey: true,
      keyCode: 38,
    })

    action({
      shiftKey: true,
      keyCode: 40,
    })
  })
})
