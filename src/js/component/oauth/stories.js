// @flow
import React from "react"
import { storiesOf, action } from "@kadira/storybook"
import { withKnobs } from "@kadira/storybook-addon-knobs"
import { MemoryRouter } from "react-router"
import { New, Page } from "./"

storiesOf("Oauth")
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>
      {story()}
    </MemoryRouter>
  ))
  .add("new", () => <New email="test@abc.com" onNew={action("onNew")} />)
  .add("page", () => (
    <Page
      email="test@abc.com"
      onNew={action("onNew")}
      isAlert={false}
      message=""
    />
  ))
