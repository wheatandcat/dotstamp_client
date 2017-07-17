// @flow
import React from "react"
import { shallow } from "enzyme"
import Combination from "./combination"

function setup() {
  const props = {
    list: [
      {
        followCount: 2,
        id: 1,
        movie: {
          movie_id: "test",
          movie_status: 1
        },
        search: "abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh",
        onSearch: jest.fn(),
        searchMatch: "test",
        soundStatus: 0,
        tags: [
          {
            id: 1,
            name: "tag1",
            userContributionID: 2
          }
        ],
        title: "test",
        updatedAt: "2015-01-01T07:12:00+09:00",
        user: {
          id: 1,
          name: "name",
          profileImageID: 0
        },
        viewStatus: 1
      },
      {
        followCount: 2,
        id: 2,
        movie: {
          movie_id: "test2",
          movie_status: 1
        },
        search: "abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh",
        onSearch: jest.fn(),
        searchMatch: "test",
        soundStatus: 0,
        tags: [
          {
            id: 1,
            name: "tag1",
            userContributionID: 2
          }
        ],
        title: "test",
        updatedAt: "2015-01-01T07:12:00+09:00",
        user: {
          id: 1,
          name: "name",
          profileImageID: 0
        },
        viewStatus: 1
      }
    ],
    openID: 1,
    show: <div>aaaaa</div>,
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
