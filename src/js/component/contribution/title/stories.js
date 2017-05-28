// @flow
import React from "react"
import { storiesOf, action } from "@kadira/storybook"
import { NewInput } from "./"

storiesOf("Contribution title").add("newInput", () => (
  <NewInput onTitle={action("change")} />
))
