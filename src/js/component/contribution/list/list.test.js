import React from "react"
import {shallow} from "enzyme"
import List from "./list"

function setup(show = true) {
  const props = {
    List: [
      {
        FollowCount: 2,
        ID: 1,
        Movie: {
          movie_id: "test",
          movie_status: 1,
        },
        Search: "abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh",
        OnSearch: jest.fn(),
        SearchMatch: "test",
        SoundStatus: 0,
        Tag: [
          {
            ID: 1,
            Name: "tag1",
            UserContributionID: 2,
          },
          {
            ID: 2,
            Name: "tag2",
            UserContributionID: 2,
          }
        ],
        Title: "test",
        UpdatedAt: "2015-01-01T07:12:00+09:00",
        User: {
          ID: 1,
          Name: "name",
          ProfileImageID: 0,
        },
        ViewStatus: 1,
        Bottom:(
          <div />
        )
      },
    ],
    Show: show,
  }

  const enzymeWrapper = shallow(<List {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("components/contribution/list/list", () => {
  it("表示", () => {
    setup()
  })

  it("非表示", () => {
    setup(false)
  })
})
