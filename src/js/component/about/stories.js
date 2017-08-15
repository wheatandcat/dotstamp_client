// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { Title, Guide, Link, Page } from "./"

storiesOf("about")
  .add("title", () => <Title>foo</Title>)
  .add("guide", () => <Guide />)
  .add("link", () => <Link />)
  .add("page", () => <Page />)
