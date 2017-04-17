import React from "react"
import {shallow} from "enzyme"
import Public from "./public"

function setup() {
  const props = {
    FollowCount: 1,
    ID: 1,
    ShowPath: "/test/1",
    SearchMatch: (<span key="SearchMatch">SearchMatch</span>),
    Sound: (<span key="Sound">Sound</span>),
    Tag: [
      {
        ID: 1,
        Name: "tag1",
        UserContributionID: 2,
      }
    ],
    Title: "abc",
    User: {
      ID: 1,
      Name: "name",
      ProfileImageID: 0,
    },
    UpdatedAt: "2015-01-01T07:12:00+09:00",
    OnSearch: jest.fn(),
  }

  const enzymeWrapper = shallow(<Public {...props}/>)

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
