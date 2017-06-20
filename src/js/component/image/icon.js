// @flow
import React from "react"
import { Thumbnail } from "./"
import styles from "./styles.css"

type Props = {
  fileName: string
}

export default ({ fileName }: Props) =>
  <Thumbnail className={styles.icon} dir="icon/" fileName={fileName} upload />
