// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { MemoryRouter } from "react-router"
import { Icon } from "./index"

storiesOf("icon")
  .addDecorator(story =>
    <MemoryRouter initialEntries={["/"]}>
      {story()}
    </MemoryRouter>
  )
  .add("Icon", () =>
    <div>
      <Icon id={1} />

      <Icon id={0} />
    </div>
  )
