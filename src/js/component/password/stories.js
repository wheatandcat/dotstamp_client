// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { Input, Reset } from "./"

storiesOf("password")
  .addDecorator(withKnobs)
  .add("Input", () =>
    <Input
      onAdd={action("on add")}
      success={boolean("success", false)}
      warning={boolean("warning", false)}
      message="foo"
    />
  )
  .add("Reset", () =>
    <Reset
      onSave={action("on save")}
      email="abc"
      keyword="def"
      success={boolean("success", false)}
      warning={boolean("warning", false)}
      message="foo"
    />
  )
