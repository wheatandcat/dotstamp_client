// @flow
import React from "react"
import { shallow } from "enzyme"
import Combination from "./combination"

function setup() {
  const props = {
    List: [
      {
        FollowCount: 2,
        ID: 1,
        Movie: {
          movie_id: "test",
          movie_status: 1
        },
        Search: "abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh",
        OnSearch: jest.fn(),
        SearchMatch: "test",
        SoundStatus: 0,
        Tag: [
          {
            ID: 1,
            Name: "tag1",
            UserContributionID: 2
          }
        ],
        Title: "test",
        UpdatedAt: "2015-01-01T07:12:00+09:00",
        User: {
          ID: 1,
          Name: "name",
          ProfileImageID: 0
        },
        ViewStatus: 1
      },
      {
        FollowCount: 2,
        ID: 2,
        Movie: {
          movie_id: "test2",
          movie_status: 1
        },
        Search: "abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh",
        OnSearch: jest.fn(),
        SearchMatch: "test",
        SoundStatus: 0,
        Tag: [
          {
            ID: 1,
            Name: "tag1",
            UserContributionID: 2
          }
        ],
        Title: "test",
        UpdatedAt: "2015-01-01T07:12:00+09:00",
        User: {
          ID: 1,
          Name: "name",
          ProfileImageID: 0
        },
        ViewStatus: 1
      }
    ],
    OpenID: 1,
    Show: <div>aaaaa</div>,
    onAdd: jest.fn(),
    onDelete: jest.fn()
  }

  const enzymeWrapper = shallow(<Combination {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("components/contribution/list/combination", () => {
  it("表示", () => {
    setup()
  })
})
