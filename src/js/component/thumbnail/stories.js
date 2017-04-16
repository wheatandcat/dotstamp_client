import React from "react"
import { storiesOf, action } from "@kadira/storybook"
import { Thumbnail, Private, Public } from "./index"

storiesOf("Thumbnail")
.add("Thumbnail on body & sound", () => (
  <div className="container">
    <Thumbnail
      FollowCount={2}
      ID={1}
      Movie={{
        movie_id: "test",
        movie_status: 1
      }}
      Search="abctestedfgtuk\njshajkhfkznfklj\njdhjksdhjdklh"
      OnSearch={action("search")}
      SearchMatch="test"
      SoundStatus={0}
      Tag={[
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
      ]}
      Title="test"
      UpdatedAt="2015-01-01T07:12:00+09:00"
      User={{
        ID: 1,
        Name: "name",
        ProfileImageID: 0,
      }}
      ViewStatus={1}
    />
  </div>
))
  .add("Thumbnail is not body", () => (
    <div className="container">
      <Thumbnail
        Body={null}
        FollowCount={0}
        ID={1}
        Movie={{
          movie_id: "",
          movie_status: 0
        }}
        Search=""
        OnSearch={action("search")}
        SearchMatch=""
        SoundStatus={0}
        Tag={[
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
        ]}
        Title="test"
        UpdatedAt="2015-01-01T07:12:00+09:00"
        User={{
          ID: 1,
          Name: "name",
          ProfileImageID: 0,
        }}
        ViewStatus={1}
      />
    </div>
  ))
  .add("Public", () => (
    <div className="container">
      <Public
        FollowCount={1}
        ID={1}
        OnSearch={action("search")}
        ShowPath="/test/1"
        SearchMatch={(<span key="SearchMatch">SearchMatch</span>)}
        Sound={(
          <span key="Sound">Sound</span>
        )}
        Tag={[
          {
            ID: 1,
            Name: "tag1",
            UserContributionID: 2,
          }
        ]}
        Title="test"
        UpdatedAt="2015-01-01T07:12:00+09:00"
        User={{
          ID: 1,
          Name: "name",
          ProfileImageID: 0,
        }}
      />
    </div>
  ))
  .add("Private", () => (
    <div className="container">
      <Private
        Title="test"
        UpdatedAt="2015-01-01T07:12:00+09:00"
        User={{
          ID: 1,
          Name: "name",
          ProfileImageID: 0,
        }}
      />
    </div>
  ))
