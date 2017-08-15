// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MemoryRouter } from "react-router"
import { Collection } from "./index"

const style = {
  padding: "20em 5em"
}

storiesOf("slick")
  .addDecorator(story =>
    <MemoryRouter initialEntries={["/"]}>
      {story()}
    </MemoryRouter>
  )
  .add("Slick", () =>
    <div style={style}>
      <Collection
        list={[
          {
            id: 1,
            fileName: "0.jpg",
            imageType: 2
          },
          {
            id: 2,
            fileName: "0.jpg",
            imageType: 2
          },
          {
            id: 3,
            fileName: "0.jpg",
            imageType: 2
          },
          {
            id: 4,
            fileName: "0.jpg",
            imageType: 2
          },
          {
            id: 5,
            fileName: "0.jpg",
            imageType: 2
          }
        ]}
        onClick={action("sclick")}
      />
    </div>
  )
  .add("List", () =>
    <div style={style}>
      <Collection
        list={[
          {
            id: 1,
            fileName: "0.jpg",
            imageType: 2
          }
        ]}
        onClick={action("sclick")}
      />
    </div>
  )
