// @flow
import React from "react"
import {New} from "./"
import styles from "./styles.css"

type Props = {
  email: string,
  onNew: Function,
}

export default ({
  email,
  onNew,
}: Props) => (
  <div className={styles.new}>
    <New
      email={email}
      onNew={onNew}
    />
  </div>
)
