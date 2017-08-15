// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { Timer } from "./index"

const style = {
  top: "10rem"
}

storiesOf("contribution/timer").addDecorator(withKnobs).add("timer", () =>
  <div style={style}>
    <Timer timer="10分28秒くらい" />
  </div>
)
