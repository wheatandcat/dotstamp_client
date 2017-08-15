// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withKnobs } from "@storybook/addon-knobs"
import { MemoryRouter } from "react-router"
import { New, Page } from "./"

storiesOf("oauth")
  .addDecorator(withKnobs)
  .addDecorator(story =>
    <MemoryRouter initialEntries={["/"]}>
      {story()}
    </MemoryRouter>
  )
  .add("new", () => <New email="test@abc.com" onNew={action("onNew")} />)
  .add("page", () =>
    <Page
      email="test@abc.com"
      onNew={action("onNew")}
      isAlert={false}
      message=""
    />
  )
