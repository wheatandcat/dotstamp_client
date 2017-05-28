// @flow
import React from "react"
import { storiesOf, action } from "@kadira/storybook"
import { MemoryRouter } from "react-router"
import { TagList, Tag } from "./index"

storiesOf("Tag")
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>
      {story()}
    </MemoryRouter>
  ))
  .add("Tag", () => <Tag to="" label="abvdef" onSearch={action("search")} />)
  .add("TagList", () => (
    <TagList
      list={[
        {
          ID: 1,
          Name: "abc"
        },
        {
          ID: 2,
          Name: "def"
        },
        {
          ID: 3,
          Name: "1234567"
        }
      ]}
      onSearch={action("search")}
    />
  ))
