// @flow
import React from "react"
import { storiesOf, action } from "@kadira/storybook"
import { Close, List, Open } from "./index"

storiesOf("contribution list")
.add("open", () => (
  <Open
    ID={1}
    Title="abcdef"
    onDelete={action("onDelete")}
  >
    <div>
      本文ブロック<br />
      本文ブロック<br />
      本文ブロック<br />
      本文ブロック<br />
      本文ブロック<br />
      本文ブロック<br />
      本文ブロック<br />
    </div>
  </Open>
))
.add("close", () => (
  <Close
    ID={1}
    onAdd={action("onDelete")}
  />
))
.add("list", () => (
  <List
    List={[
      {
        FollowCount: 2,
        ID: 1,
        Movie: {
          movie_id: "test",
          movie_status: 1,
        },
        Search: "abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh",
        OnSearch: action("search"),
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
          <Close
            ID={1}
            onAdd={action("onDelete")}
          />
        )
      },
      {
        FollowCount: 2,
        ID: 2,
        Movie: {
          movie_id: "test",
          movie_status: 1,
        },
        Search: "abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh",
        OnSearch: action("search"),
        SearchMatch: "test",
        SoundStatus: 0,
        Tag: [
          {
            ID: 1,
            Name: "tag1",
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
          <Close
            ID={2}
            onAdd={action("onDelete")}
          />
        )
      },
    ]}
    Show={true}
  />
))
