// @flow
import React from "react"
import { storiesOf } from "@kadira/storybook"
import { Title, Guide, Link, Page } from "./"

storiesOf("About")
  .add("title", () => <Title>foo</Title>)
  .add("guide", () => <Guide />)
  .add("link", () => <Link />)
  .add("page", () => <Page />)
