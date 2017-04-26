// @flow
import React from "react"
import {storiesOf, action} from "@kadira/storybook"
import {Image, Text, Balloon, EditImage, EditText} from "./index"

storiesOf("Bllon")
.add("text", () => (
  <div className="container">
    <Text Label="abcdef" />
  </div>
)).add("image", () => (
  <div className="container">
    <Image FileName="0.png" />
  </div>
)).add("bllon", () => (
  <div className="container">
    <Balloon
      UserFileName="0.png"
      Type={1}
      Talk="abcdef"
    />
    <Balloon
      UserFileName="0.png"
      Type={2}
      Talk="0.png"
    />
  </div>
)).add("edit", () => (
  <div className="container">
    <div>
      <EditText
        UserFileName="0.png"
        Type={1}
        Talk="abcdef"
        Item={{ body: "text" }}
        Priority={1}
        onChangeText={action("onChangeBody")}
        onDelete={action("onDelete")}
      />
    </div>
    <div>
      <EditImage
        UserFileName="0.png"
        Type={2}
        Talk="0.png"
        Priority={2}
        onChangeImage={action("onChangeImage")}
        onDelete={action("onDelete")}
      />
    </div>
  </div>
))
