// @flow
import React from "react"
import { Image } from "./"
import styles from "./styles.css"

type Props = {
  fileName: string,
  circle?: boolean,
  size?: "small",
  onMouseOver?: Function,
  onMouseOut?: Function,
  onClick?: Function
}

function className(styles: Object, size?: "small") {
  let r = ""
  if (size) {
    r = styles[size]
  }

  return `${styles.character} ${r}`
}

export default ({
  fileName,
  circle,
  size,
  onMouseOver,
  onMouseOut,
  onClick
}: Props) =>
  <Image
    className={className(styles, size)}
    dir="character/"
    fileName={fileName}
    upload
    circle={circle}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    onClick={onClick}
  />
