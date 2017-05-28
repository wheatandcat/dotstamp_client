// @flow
import React from "react"
import { shallow } from "enzyme"
import Thumbnail from "./thumbnail"

function setup(search, viewStatus, OnSearch, movieId) {
  const props = {
    FollowCount: 1,
    ID: 1,
    Movie: {
      movie_id: movieId,
      movie_status: 1
    },
    Search: search,
    SearchMatch: "test",
    SoundStatus: 0,
    Tag: [
      {
        ID: 1,
        Name: "tag1",
        UserContributionID: 2
      }
    ],
    Title: "abc",
    User: {
      ID: 1,
      Name: "name",
      ProfileImageID: 0
    },
    UpdatedAt: "2015-01-01T07:12:00+09:00",
    ViewStatus: viewStatus,
    OnSearch: OnSearch
  }

  const enzymeWrapper = shallow(<Thumbnail {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("components/thumbnail/thumbnail", () => {
  it("公開-検索有り", () => {
    setup(
      "abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh",
      1,
      jest.fn(),
      "test"
    )
  })

  it("長文検索文章の引用", () => {
    setup(
      "abctehgjgnklnkngghjgjhgjghtestghvhgjhgstedfgtuk\njshajkhkjgikgkjhkhjkbbkbfkznfklj\njdhjkghjghghjghjgbbnvhvhvjhvjhvjvhvhvsdhjdklh",
      1,
      jest.fn(),
      "test"
    )
  })

  it("公開-動画非公開", () => {
    setup("", 1, undefined, "test")
  })

  it("公開-検索無し", () => {
    setup("", 1, jest.fn(), "")
  })

  it("非公開", () => {
    setup("", 0, jest.fn(), "")
  })
})
