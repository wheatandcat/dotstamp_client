// @flow
import React from "react"
import { Glyphicon, Label } from "react-bootstrap"

type Props = {
  className?: string,
  timer: string
}

export default ({ className, timer }: Props) =>
  <Label bsStyle="primary" className={className}>
    <Glyphicon glyph="time" />&nbsp;&nbsp;予測：&nbsp;{timer}&nbsp;&nbsp;
  </Label>
