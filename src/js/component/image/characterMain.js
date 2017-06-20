// @flow
import React from "react"
import type { Children } from "react"
import { Thumbnail } from "./"
import styles from "./styles.css"

type Props = {
  children?: Children,
  fileName: string
}

export default ({ children, fileName }: Props) =>
  <Thumbnail
    className={`${styles.characterMain} center-block`}
    dir="character/"
    fileName={fileName}
    upload
  >
    {children}
  </Thumbnail>
