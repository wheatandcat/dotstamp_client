// @flow
import React from "react"
import { mount } from "enzyme"
import { Slick } from "./"

function setup(params: Object) {
  const props = {
    list: params.list,
    defaultValue: params.defaultValue,
    onClick: jest.fn()
  }

  const enzymeWrapper = mount(<Slick {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("components/slick/slick", () => {
  it("表示", () => {
    setup({
      list: [
        {
          id: 1,
          fileName: "0.jpg",
          imageType: 2
        }
      ],
      defaultValue: 0
    })

    setup({
      list: [
        {
          id: 1,
          fileName: "0.jpg",
          imageType: 2
        }
      ],
      defaultValue: 1
    })
  })

  it("call click", () => {
    const { enzymeWrapper } = setup({
      list: [
        {
          id: 1,
          fileName: "0.jpg",
          imageType: 2
        }
      ]
    })

    const instance: Slick = enzymeWrapper.instance()
    instance.click({
      target: {
        src: "abc.png"
      }
    })
  })

  it("call change", () => {
    const { enzymeWrapper } = setup({
      list: [
        {
          id: 1,
          fileName: "0.jpg",
          imageType: 2
        },
        {
          id: 2,
          fileName: "0.jpg",
          imageType: 2
        }
      ]
    })

    const instance: Slick = enzymeWrapper.instance()
    instance.change(1)
  })

  it("call balloon", () => {
    const { enzymeWrapper } = setup({
      list: [
        {
          id: 1,
          fileName: "0.jpg",
          imageType: 2
        }
      ]
    })

    const instance: Slick = enzymeWrapper.instance()
    instance.balloon({
      target: {
        getBoundingClientRect() {
          return {
            left: 1,
            top: 1,
            src: "0.png"
          }
        }
      }
    })
  })
})
