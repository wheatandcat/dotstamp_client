// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Character, CharacterMain, Icon, Talk } from "./index"

storiesOf("image")
  .add("character", () =>
    <Character
      fileName="0.jpg"
      onMouseOver={action("mouth over")}
      onMouseOut={action("mouth out")}
      onClick={action("on click")}
    />
  )
  .add("icon", () => <Icon fileName="1.jpg" />)
  .add("character Main", () => <CharacterMain fileName="0.jpg" />)
  .add("talk", () => <Talk fileName="0.png" />)
