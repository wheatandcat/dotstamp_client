// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withKnobs, boolean } from "@storybook/addon-knobs"
import { Action, Upload, Text } from "./index"

storiesOf("contribution/form")
  .addDecorator(withKnobs)
  .add("action", () =>
    <Action
      cancel={boolean("cancel", false)}
      disabled={boolean("disabled", false)}
      onAdd={action("onAdd")}
      onUpload={action("onUpload")}
      onCancel={action("onCancel")}
    />
  )
  .add("upload", () =>
    <Upload
      disabled={boolean("disabled", false)}
      onChange={action("onUpload")}
    />
  )
  .add("text", () =>
    <Text
      edit={boolean("edit", false)}
      body="foo"
      onChange={action("onChange")}
    />
  )
