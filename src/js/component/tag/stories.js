// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MemoryRouter } from "react-router"
import { AddInput, AddForm, NewInput, TagList, Tag } from "./index"

storiesOf("tag")
  .addDecorator(story =>
    <MemoryRouter initialEntries={["/"]}>
      {story()}
    </MemoryRouter>
  )
  .add("Tag", () => <Tag to="" label="abvdef" onSearch={action("search")} />)
  .add("TagList", () =>
    <TagList
      list={[
        {
          id: 1,
          name: "abc"
        },
        {
          id: 2,
          name: "def"
        },
        {
          id: 3,
          name: "1234567"
        }
      ]}
      onSearch={action("search")}
    />
  )
  .add("New Input", () => <NewInput label="foo" onTag={action("change")} />)
  .add("Add Input", () => <AddInput label="foo" onAdd={action("on add")} />)
  .add("Add Form", () =>
    <AddForm
      tags={[
        { id: 1, name: "foo" },
        { id: 2, name: "foo" },
        { id: 3, name: "foo" }
      ]}
      onAdd={action("on add")}
      onDelete={action("on delete")}
    />
  )
  .add("Add Form Max", () =>
    <AddForm
      tags={[
        { id: 1, name: "foo" },
        { id: 2, name: "foo" },
        { id: 3, name: "foo" },
        { id: 4, name: "foo" },
        { id: 5, name: "foo" },
        { id: 6, name: "foo" },
        { id: 7, name: "foo" },
        { id: 8, name: "foo" },
        { id: 9, name: "foo" },
        { id: 10, name: "foo" }
      ]}
      onAdd={action("on add")}
      onDelete={action("on delete")}
    />
  )
