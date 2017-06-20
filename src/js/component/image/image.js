// @flow
import React from "react"
import { Image } from "react-bootstrap"
import { getFileName } from "./plain"

type Props = {
  dir: string,
  fileName: string,
  className?: string,
  upload?: boolean,
  circle?: boolean,
  onMouseOver?: Function,
  onMouseOut?: Function,
  onClick?: Function
}

export default ({
  dir,
  fileName,
  className,
  upload,
  circle,
  onMouseOver,
  onMouseOut,
  onClick
}: Props) =>
  <Image
    className={className}
    src={getFileName(fileName, dir, upload)}
    circle={circle}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    onClick={onClick}
  />
