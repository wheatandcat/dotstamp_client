// @flow
import React from "react"
import { storiesOf, action } from "@kadira/storybook"
import { MemoryRouter } from "react-router"
import { AddInput, AddForm, NewInput, TagList, Tag } from "./index"

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
  .add("New Input", () => <NewInput label="foo" onTag={action("change")} />)
  .add("Add Input", () => <AddInput label="foo" onAdd={action("on add")} />)
  .add("Add Form", () => (
    <AddForm
      tagList={[
        { ID: 1, Name: "foo" },
        { ID: 2, Name: "foo" },
        { ID: 3, Name: "foo" }
      ]}
      onAdd={action("on add")}
      onDelete={action("on delete")}
    />
  ))
  .add("Add Form Max", () => (
    <AddForm
      tagList={[
        { ID: 1, Name: "foo" },
        { ID: 2, Name: "foo" },
        { ID: 3, Name: "foo" },
        { ID: 4, Name: "foo" },
        { ID: 5, Name: "foo" },
        { ID: 6, Name: "foo" },
        { ID: 7, Name: "foo" },
        { ID: 8, Name: "foo" },
        { ID: 9, Name: "foo" },
        { ID: 10, Name: "foo" }
      ]}
      onAdd={action("on add")}
      onDelete={action("on delete")}
    />
  ))
