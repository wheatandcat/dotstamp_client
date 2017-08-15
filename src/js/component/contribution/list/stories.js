// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MemoryRouter } from "react-router"
import { Close, Combination, List, Open } from "./index"

storiesOf("contribution/list")
  .addDecorator(story =>
    <MemoryRouter initialEntries={["/"]}>
      {story()}
    </MemoryRouter>
  )
  .add("open", () =>
    <Open id={1} onDelete={action("onDelete")}>
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
  )
  .add("close", () => <Close id={1} onAdd={action("onAdd")} />)
  .add("list", () =>
    <List
      list={[
        {
          Content: {
            followCount: 2,
            id: 1,
            movie: {
              movie_id: "test",
              movie_status: 1
            },
            search: "abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh",
            onSearch: action("search"),
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
          bottom: <Close id={1} onAdd={action("onDelete")} />
        },
        {
          Content: {
            followCount: 2,
            id: 2,
            movie: {
              movie_id: "test",
              movie_status: 1
            },
            search: "abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh",
            onSearch: action("search"),
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
          bottom: <Close id={2} onAdd={action("onDelete")} />
        }
      ]}
      content
      onSearch={action("search")}
    />
  )
  .add("Combination", () =>
    <Combination
      list={[
        {
          followCount: 2,
          id: 1,
          movie: {
            movie_id: "test",
            movie_status: 1
          },
          search: "abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh",
          onSearch: action("search"),
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
        {
          followCount: 2,
          id: 2,
          movie: {
            movie_id: "test",
            movie_status: 1
          },
          search: "abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh",
          onSearch: action("search"),
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
      ]}
      openID={1}
      show={
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
      content={false}
      onAdd={action("onAdd")}
      onDelete={action("onDelete")}
    />
  )
