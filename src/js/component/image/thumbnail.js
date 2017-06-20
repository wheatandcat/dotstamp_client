// @flow
import React from "react"
import { Thumbnail } from "react-bootstrap"
import type { Children } from "react"
import { getFileName } from "./plain"

type Props = {
  children?: Children,
  dir: string,
  fileName: string,
  className?: string,
  upload?: boolean
}

export default ({ children, dir, fileName, className, upload }: Props) =>
  <Thumbnail className={className} src={getFileName(fileName, dir, upload)}>
    {children}
  </Thumbnail>
