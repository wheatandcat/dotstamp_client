// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MemoryRouter } from "react-router"
import { Collection } from "./index"

const style = {
  padding: "20em 5em"
}

storiesOf("Slick")
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>
      {story()}
    </MemoryRouter>
  ))
  .add("Slick", () => (
    <div style={style}>
      <Collection
        list={[
          {
            ID: 1,
            FileName: "0.jpg",
            imageType: 2
          },
          {
            ID: 2,
            FileName: "0.jpg",
            imageType: 2
          },
          {
            ID: 3,
            FileName: "0.jpg",
            imageType: 2
          },
          {
            ID: 4,
            FileName: "0.jpg",
            imageType: 2
          },
          {
            ID: 5,
            FileName: "0.jpg",
            imageType: 2
          }
        ]}
        onClick={action("sclick")}
      />
    </div>
  ))
  .add("List", () => (
    <div style={style}>
      <Collection
        list={[
          {
            ID: 1,
            FileName: "0.jpg",
            imageType: 2
          }
        ]}
        onClick={action("sclick")}
      />
    </div>
  ))
