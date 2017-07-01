// @flow
import React from "react"
import { Button, Glyphicon } from "react-bootstrap"

type Props = {
  label?: string,
  onPause: Function
}

export default ({ label, onPause }: Props) =>
  <Button onClick={() => onPause()}>
    <Glyphicon glyph="pause" />
    {label}
  </Button>
