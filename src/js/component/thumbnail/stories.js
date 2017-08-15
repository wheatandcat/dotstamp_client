// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MemoryRouter } from "react-router"
import { Thumbnail, Private, Public } from "./index"

storiesOf("thumbnail")
  .addDecorator(story =>
    <MemoryRouter initialEntries={["/"]}>
      {story()}
    </MemoryRouter>
  )
  .add("Thumbnail on body & sound", () =>
    <div className="container">
      <Thumbnail
        followCount={2}
        id={1}
        movie={{
          movie_id: "test",
          movie_status: 1
        }}
        search="abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh"
        onSearch={action("search")}
        searchMatch="test"
        soundStatus={0}
        tags={[
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
        ]}
        title="test"
        updatedAt="2015-01-01T07:12:00+09:00"
        user={{
          id: 1,
          name: "name",
          profileImageID: 0
        }}
        viewStatus={1}
      />
    </div>
  )
  .add("Thumbnail is not body", () =>
    <div className="container">
      <Thumbnail
        body={null}
        followCount={0}
        id={1}
        movie={{
          movie_id: "",
          movie_status: 0
        }}
        search=""
        onSearch={action("search")}
        searchMatch=""
        soundStatus={0}
        tags={[
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
        ]}
        title="test"
        updatedAt="2015-01-01T07:12:00+09:00"
        user={{
          id: 1,
          name: "name",
          profileImageID: 0
        }}
        viewStatus={1}
      />
    </div>
  )
  .add("Public", () =>
    <div className="container">
      <Public
        followCount={1}
        onSearch={action("search")}
        showPath="/test/1"
        searchMatch={<span key="SearchMatch">SearchMatch</span>}
        sound={<span key="Sound">Sound</span>}
        tags={[
          {
            id: 1,
            name: "tag1",
            userContributionID: 2
          }
        ]}
        title="test"
        updatedAt="2015-01-01T07:12:00+09:00"
        user={{
          id: 1,
          name: "name",
          profileImageID: 0
        }}
      />
    </div>
  )
  .add("Private", () =>
    <div className="container">
      <Private
        title="test"
        updatedAt="2015-01-01T07:12:00+09:00"
        user={{
          id: 1,
          name: "name",
          profileImageID: 0
        }}
      />
    </div>
  )
