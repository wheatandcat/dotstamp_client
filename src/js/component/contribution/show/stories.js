// @flow
import React from "react"
import { storiesOf, action } from "@kadira/storybook"
import { withKnobs, boolean, number} from "@kadira/storybook-addon-knobs"
import { MemoryRouter } from "react-router"
import { About, Follow, Title, Problem, Youtube, Header } from "./index"

storiesOf("Contribution show")
.addDecorator(withKnobs)
.addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>
      {story()}
    </MemoryRouter>
))
.add("Follow", () => (
  <div>
    <Follow
      count={1}
      onAdd={action("onAdd")}
      onDelete={action("onDelete")}
    />
    <br />
    <Follow
      count={1}
      actived
      onAdd={action("onAdd")}
      onDelete={action("onDelete")}
    />
    <br />
    <Follow
      count={1}
      disabled
      onAdd={action("onAdd")}
      onDelete={action("onDelete")}
    />
    <br />
  </div>
)).add("About", () => (
  <div>
    <About
      profileImageID={1}
      userName="abcdef"
      updatedAt="2015-01-01T07:12:00+09:00"
      openProblem={action("openProblem")}
    />
  </div>
)).add("Title", () => (
  <Title
    followElement={(
      <Follow
        count={1}
        onAdd={action("onAdd")}
        onDelete={action("onDelete")}
      />
    )}
    tagList={[
      {
        ID: 1,
        Name: "abc",
      },
      {
        ID: 2,
        Name: "def",
      },
    ]}
    title="abcdef"
  />
)).add("Problem", () => (
  <Problem
    problemType={number("problemType", 1)}
    send={boolean("send", false)}
    show={boolean("show", true)}
    onProblemType={action("onProblemType")}
    onHide={action("onHide")}
    onAdd={action("onAdd")}
  />
)).add("Youtube", () => (
  <Youtube
    movieID="3ovRJjqqvdM"
  />
)).add("Youtube not found", () => (
  <Youtube
    movieID=""
  />
)).add("Header", () => (
  <Header
    followElement={(
      <Follow
        count={1}
        onAdd={action("onAdd")}
        onDelete={action("onDelete")}
      />
    )}
    tagList={[
      {
        ID: 1,
        Name: "abc",
      },
      {
        ID: 2,
        Name: "def",
      },
    ]}
    title="abcdef"
    movieID="3ovRJjqqvdM"
    profileImageID={1}
    userName="abcdef"
    updatedAt="2015-01-01T07:12:00+09:00"
    openProblem={action("openProblem")}
  />
))
