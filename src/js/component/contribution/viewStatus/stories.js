// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withKnobs, boolean, number } from "@storybook/addon-knobs"
import { Status, Sound, Public, Private } from "./index"

storiesOf("contribution/viewStatus")
  .addDecorator(withKnobs)
  .add("Public", () =>
    <Public
      disabled={boolean("disabled", false)}
      onSave={action("on save")}
      onChageStatus={action("on view status")}
    />
  )
  .add("Private", () =>
    <Private
      disabled={boolean("disabled", false)}
      onSave={action("on save")}
      onChageStatus={action("on view status")}
    />
  )
  .add("Status", () =>
    <Status
      viewStatus={number("viewStatus", 1)}
      disabled={boolean("disabled", false)}
      onPublic={action("on public")}
      onPrivate={action("on private")}
      onChageStatus={action("on view status")}
    />
  )
  .add("Sound", () =>
    <Sound
      contributionId={1}
      created={boolean("disabled", true)}
      addSound={action("add sound")}
      experience={boolean("disabled", true)}
    />
  )
