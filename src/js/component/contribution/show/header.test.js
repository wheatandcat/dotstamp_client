// @flow
import React from "react"
import { shallow } from "enzyme"
import { Header } from "./"

function setup() {
  const props = {
    followElement: <div />,
    tags: [
      {
        id: 1,
        name: "abc"
      },
      {
        id: 2,
        name: "def"
      }
    ],
    title: "abc",
    profileImageID: 1,
    userName: "abc",
    updatedAt: "2015-01-01T07:12:00+09:00",
    movieID: "",
    openProblem: jest.fn()
  }

  const enzymeWrapper = shallow(<Header {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("component/contribution/show/header", () => {
  it("表示", () => {
    setup()
  })
})
