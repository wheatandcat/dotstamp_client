// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Image, Text, Balloon, EditImage, EditText } from "./index"

storiesOf("contribution/ballon")
  .add("text", () =>
    <div className="container">
      <Text label="abcdef" />
    </div>
  )
  .add("image", () =>
    <div className="container">
      <Image fileName="0.png" />
    </div>
  )
  .add("bllon", () =>
    <div className="container">
      <Balloon userFileName="0.png" type={1} talk="abcdef" />
      <Balloon userFileName="0.png" type={2} talk="0.png" />
    </div>
  )
  .add("edit", () =>
    <div className="container">
      <div>
        <EditText
          userFileName="0.png"
          type={1}
          talk="abcdef"
          item={{ body: "text" }}
          priority={1}
          onChangeText={action("onChangeBody")}
          onDelete={action("onDelete")}
        />
      </div>
      <div>
        <EditImage
          userFileName="0.png"
          type={2}
          talk="0.png"
          priority={2}
          onChangeImage={action("onChangeImage")}
          onDelete={action("onDelete")}
        />
      </div>
    </div>
  )
