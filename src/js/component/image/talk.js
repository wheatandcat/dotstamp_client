// @flow
import React from "react"
import { Image } from "./"
import styles from "./styles.css"

type Props = {
  fileName: string
}

export default ({ fileName }: Props) =>
  <Image className={styles.talk} dir="talk/" fileName={fileName} upload />
