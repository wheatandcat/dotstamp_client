// @flow
import React from "react"
import { storiesOf, action } from "@kadira/storybook"
import { Guide } from "./index"

storiesOf("Contribution help").add("guide", () => (
  <Guide open onHide={action("onHide")} />
))
