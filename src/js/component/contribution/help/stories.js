// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Guide } from "./index"

storiesOf("Contribution help").add("guide", () => (
  <Guide open onHide={action("onHide")} />
))
