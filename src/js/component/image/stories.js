// @flow
import React from "react"
import { storiesOf, action } from "@kadira/storybook"
import { Character, CharacterMain, Icon, Talk } from "./index"

storiesOf("Image")
  .add("character", () => (
    <Character
      fileName="0.jpg"
      onMouseOver={action("mouth over")}
      onMouseOut={action("mouth out")}
      onClick={action("on click")}
    />
  ))
  .add("icon", () => <Icon fileName="1.jpg" />)
  .add("character Main", () => <CharacterMain fileName="0.jpg" />)
  .add("talk", () => <Talk fileName="0.png" />)
