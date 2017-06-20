// @flow
import React from "react"
import { Talk } from "../../image/"
import styles from "./styles.css"

type Props = {
  FileName: string
}

export default ({ FileName }: Props) =>
  <div className={styles.Balloon}>
    <Talk fileName={FileName} />
  </div>
