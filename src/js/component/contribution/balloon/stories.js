// @flow
import React from "react"
import {storiesOf} from "@kadira/storybook"
import {Image, Text, Balloon} from "./index"

storiesOf("Bllon")
.add("text", () => (
  <div className="container">
    <Text Label="abcdef" />
  </div>
)).add("image", () => (
  <div className="container">
    <Image FileName="0.png" />
  </div>
)).add("bllon text", () => (
  <div className="container">
    <Balloon
      UserFileName="0.png"
      TalkType={1}
      Body="abcdef"
    />
  </div>
))
