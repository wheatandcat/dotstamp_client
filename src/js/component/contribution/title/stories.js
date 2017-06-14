// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { NewInput } from "./"

storiesOf("Contribution title").add("newInput", () => (
  <NewInput onTitle={action("change")} />
))
