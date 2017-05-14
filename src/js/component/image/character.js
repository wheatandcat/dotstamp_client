// @flow
import React from "react"
import {Image} from "./"
import styles from "./styles.css"

type Props = {
  fileName: string,
  onMouseOver?: Function,
  onMouseOut?: Function,
  onClick?: Function,
}

export default ({
  fileName,
  onMouseOver,
  onMouseOut,
  onClick,
}: Props) => (
  <Image
    className={styles.character}
    dir="character/"
    fileName={fileName}
    upload
    circle
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    onClick={onClick}
  />
)
