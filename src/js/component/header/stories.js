// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { Login, NoLogin, Page } from "./index"

storiesOf("header")
  .addDecorator(withKnobs)
  .add("Login", () => <Login name="foo" logout={action("on logout")} />)
  .add("NoLogin", () => <NoLogin />)
  .add("Page", () =>
    <Page
      name="foo"
      logout={action("on logout")}
      login={boolean("login", false)}
    />
  )
