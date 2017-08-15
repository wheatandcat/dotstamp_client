// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withKnobs } from "@storybook/addon-knobs"
import { Tags } from "./index"

storiesOf("contribution/header")
  .addDecorator(withKnobs)
  .add("tags new", () =>
    <Tags
      add={action("on add")}
      change={action("on change")}
      remove={action("on remove")}
      tags={[
        { id: 1, name: "foo" },
        { id: 2, name: "bar" },
        { id: 3, name: "foo" }
      ]}
    />
  )
  .add("tags setting id", () =>
    <Tags
      add={action("on add")}
      change={action("on change")}
      remove={action("on remove")}
      contributionId={1}
      tags={[
        { id: 1, name: "foo" },
        { id: 2, name: "foo" },
        { id: 3, name: "foo" }
      ]}
    />
  )
