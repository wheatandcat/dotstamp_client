import React from "react"
import { storiesOf } from "@kadira/storybook"

storiesOf("Button").add("with a text", () => (
  <button>My First Button</button>
)).add("with no text", () => (
  <button></button>
))
