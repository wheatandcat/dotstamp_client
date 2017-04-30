// @flow
import React from "react"
import {shallow} from "enzyme"
import {Header} from "./"

function setup() {
  const props = {
    followElement: (<div />),
    tagList: [
      {
        ID: 1,
        Name: "abc",
      },
      {
        ID: 2,
        Name: "def",
      },
    ],
    title: "abc",
    profileImageID: 1,
    userName: "abc",
    updatedAt: "2015-01-01T07:12:00+09:00",
    movieID: "",
    openProblem: jest.fn(),
  }

  const enzymeWrapper = shallow(<Header {...props}/>)

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
