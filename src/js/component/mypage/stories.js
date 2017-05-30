// @flow
import React from "react"
import { storiesOf, action } from "@kadira/storybook"
import { Menu, ProfileImage } from "./"

storiesOf("Mypage")
  .add("Menu", () => <Menu />)
  .add("ProfileImage", () => (
    <ProfileImage ProfileImageID={1} onChange={action("on Change")} />
  ))
