// @flow
import React from "react"
import { Character } from "../image/"
import styles from "./styles.css"

type Props = {
  list: Array<Object>
}

export default ({ list }: Props) =>
  <div className={styles.list}>
    <div>
      {list.map(data =>
        <div key={data.id}>
          <Character fileName={data.fileName} />
        </div>
      )}
    </div>
  </div>
