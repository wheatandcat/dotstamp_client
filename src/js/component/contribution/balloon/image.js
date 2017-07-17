// @flow
import React from "react"
import { Talk } from "../../image/"
import styles from "./styles.css"

type Props = {
  fileName: string
}

export default ({ fileName }: Props) =>
  <div className={styles.Balloon}>
    <Talk fileName={fileName} />
  </div>
