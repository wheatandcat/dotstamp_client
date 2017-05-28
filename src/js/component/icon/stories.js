// @flow
import React from "react"
import { storiesOf } from "@kadira/storybook"
import { MemoryRouter } from "react-router"
import { Icon } from "./index"

storiesOf("Icon")
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>
      {story()}
    </MemoryRouter>
  ))
  .add("Icon", () => (
    <div>
      <Icon ID={1} />

      <Icon ID={0} />
    </div>
  ))
