// @flow
import React from "react"
import type { Children } from "react"
import ErrorShow from "./redux/error/containers/show"
import Header from "./utils/parts/header"

type Props = {
  children?: Children
}

export default ({ children }: Props) =>
  <div>
    <Header />
    {children}
    <ErrorShow />
  </div>
