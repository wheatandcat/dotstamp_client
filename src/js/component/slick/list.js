// @flow
import React from "react"
import UtitsImage from "../../utils/image"
import styles from "./styles.css"

type Props = {
  list: Array<Object>,
}

export default ({
  list,
}: Props) => (
  <div className={styles.list}>
    <div>
      {list.map((data) => {
        return (
          <div key={data.ID}>
            <UtitsImage fileName={data.FileName} imageDisplayType={data.imageType}/>
          </div>
        )
      })}
    </div>
  </div>
)
