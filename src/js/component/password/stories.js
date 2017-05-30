// @flow
import React from "react"
import { storiesOf, action } from "@kadira/storybook"
import { withKnobs, boolean } from "@kadira/storybook-addon-knobs"
import { Input, Reset } from "./"

storiesOf("Password")
  .addDecorator(withKnobs)
  .add("Input", () => (
    <Input
      onAdd={action("on add")}
      success={boolean("success", false)}
      warning={boolean("warning", false)}
      message="foo"
    />
  ))
  .add("Reset", () => (
    <Reset
      onSave={action("on save")}
      email="abc"
      keyword="def"
      success={boolean("success", false)}
      warning={boolean("warning", false)}
      message="foo"
    />
  ))
