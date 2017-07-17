// @flow
import React from "react"
import { shallow } from "enzyme"
import Public from "./public"

function setup() {
  const props = {
    followCount: 1,
    id: 1,
    showPath: "/test/1",
    searchMatch: <span key="SearchMatch">SearchMatch</span>,
    sound: <span key="Sound">Sound</span>,
    tags: [
      {
        id: 1,
        name: "tag1",
        userContributionID: 2
      }
    ],
    title: "abc",
    user: {
      id: 1,
      name: "name",
      profileImageID: 0
    },
    updatedAt: "2015-01-01T07:12:00+09:00",
    onSearch: jest.fn()
  }

  const enzymeWrapper = shallow(<Public {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("components/thumbnail/public", () => {
  it("表示", () => {
    setup()
  })
})
