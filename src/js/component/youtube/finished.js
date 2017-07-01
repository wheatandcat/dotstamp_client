// @flow
import React from "react"
import { Button, Glyphicon } from "react-bootstrap"

type Props = {
  label?: string,
  onPlay: Function
}

export default ({ label, onPlay }: Props) =>
  <Button onClick={() => onPlay()}>
    <Glyphicon glyph="repeat" />
    {label}
  </Button>
