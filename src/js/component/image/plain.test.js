// @flow
/* global process*/
import React from "react"
import { shallow } from "enzyme"
import { Image } from "./"

function setup(params: Object): Object {
  const props = {
    dir: "/test",
    fileName: "abc.png",
    upload: params.upload
  }

  const enzymeWrapper = shallow(<Image {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/image/image", () => {
  it("image", () => {
    setup({
      upload: false
    })
  })

  it("upload", () => {
    setup({
      upload: true
    })
  })

  it("change env", () => {
    process.env.UPLOAD_PATH = "test/files/"
    process.env.IMAGE_PATH = "images/"

    setup({ upload: false })
    setup({ upload: true })

    process.env.UPLOAD_PATH = undefined
    process.env.IMAGE_PATH = undefined
  })
})
