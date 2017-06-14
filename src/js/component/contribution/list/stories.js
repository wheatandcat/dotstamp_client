// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MemoryRouter } from "react-router"
import { Close, Combination, List, Open } from "./index"

storiesOf("Contribution list")
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>
      {story()}
    </MemoryRouter>
  ))
  .add("open", () => (
    <Open ID={1} Title="abcdef" onDelete={action("onDelete")}>
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
  .add("close", () => <Close ID={1} onAdd={action("onAdd")} />)
  .add("list", () => (
    <List
      List={[
        {
          Content: {
            FollowCount: 2,
            ID: 1,
            Movie: {
              movie_id: "test",
              movie_status: 1
            },
            Search: "abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh",
            OnSearch: action("search"),
            SearchMatch: "test",
            SoundStatus: 0,
            Tag: [
              {
                ID: 1,
                Name: "tag1",
                UserContributionID: 2
              },
              {
                ID: 2,
                Name: "tag2",
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
          Bottom: <Close ID={1} onAdd={action("onDelete")} />
        },
        {
          Content: {
            FollowCount: 2,
            ID: 2,
            Movie: {
              movie_id: "test",
              movie_status: 1
            },
            Search: "abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh",
            OnSearch: action("search"),
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
          Bottom: <Close ID={2} onAdd={action("onDelete")} />
        }
      ]}
      Content
      OnSearch={action("search")}
    />
  ))
  .add("Combination", () => (
    <Combination
      List={[
        {
          FollowCount: 2,
          ID: 1,
          Movie: {
            movie_id: "test",
            movie_status: 1
          },
          Search: "abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh",
          OnSearch: action("search"),
          SearchMatch: "test",
          SoundStatus: 0,
          Tag: [
            {
              ID: 1,
              Name: "tag1",
              UserContributionID: 2
            },
            {
              ID: 2,
              Name: "tag2",
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
            movie_id: "test",
            movie_status: 1
          },
          Search: "abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh",
          OnSearch: action("search"),
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
      ]}
      OpenID={1}
      Show={
        <div>
          本文ブロック<br />
          本文ブロック<br />
          本文ブロック<br />
          本文ブロック<br />
          本文ブロック<br />
          本文ブロック<br />
          本文ブロック<br />
        </div>
      }
      onAdd={action("onAdd")}
      onDelete={action("onDelete")}
    />
  ))
