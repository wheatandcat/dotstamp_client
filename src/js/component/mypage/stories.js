// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { Menu, ProfileImage, UserName, Page } from "./"

storiesOf("mypage")
  .add("Menu", () => <Menu />)
  .add("ProfileImage", () =>
    <ProfileImage imageID={1} onChange={action("on Change")} />
  )
  .add("UserName", () => <UserName name="foo" onChange={action("on Change")} />)
  .add("Page", () =>
    <Page
      name="foo"
      onChangeeName={action("on Change name")}
      imageID={1}
      onChangeImage={action("on change iamge")}
      onSave={action("on save")}
    />
  )
