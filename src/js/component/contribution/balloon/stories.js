// @flow
import React from "react"
import {storiesOf, action} from "@kadira/storybook"
import {Edit, Image, Text, Balloon} from "./index"

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
)).add("edit", () => (
  <div className="container">
    <Edit
      UserFileName="0.png"
      TalkType={1}
      Body="abcdef"
      Item={{ body: "text" }}
      Priority={1}
      onChangeImage={action("onChangeImage")}
      onChangeText={action("onChangeBody")}
      onDelete={action("onDelete")}
    />
    <Edit
      UserFileName="0.png"
      TalkType={2}
      Body="0.png"
      Item={{ body: "text" }}
      Priority={1}
      onChangeImage={action("onChangeImage")}
      onChangeText={action("onChangeBody")}
      onDelete={action("onDelete")}
    />
  </div>
))
