// @flow
import React from "react"
import { Thumbnail } from "./"

type Props = {
  fileName: string
}

export default ({ fileName }: Props) =>
  <Thumbnail dir="/" fileName={fileName} />
