// @flow
import React from "react"
import { Button, Glyphicon } from "react-bootstrap"

type Props = {
  full?: boolean,
  onFull: Function,
  onSmaill: Function
}

function button(full?: boolean, onFull: Function, onSmaill: Function) {
  if (full) {
    return (
      <Button onClick={() => onSmaill()} aria-label="resize-small">
        <Glyphicon glyph="resize-small" />
      </Button>
    )
  }

  return (
    <Button onClick={() => onFull()} aria-label="resize-full">
      <Glyphicon glyph="resize-full" />
    </Button>
  )
}

export default ({ full, onFull, onSmaill }: Props) =>
  button(full, onFull, onSmaill)
