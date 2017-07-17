// @flow
import React from "react"
import { shallow } from "enzyme"
import List from "./list"

function setup(params: Object) {
  const props = {
    list: [
      {
        Content: {
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
            },
            {
              id: 2,
              name: "tag2",
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
        bottom: <div />
      }
    ],
    content: params.content
  }

  const enzymeWrapper = shallow(<List {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("components/contribution/list/list", () => {
  it("表示", () => {
    setup({
      content: false
    })
  })

  it("Content", () => {
    setup({
      content: true
    })
  })
})
