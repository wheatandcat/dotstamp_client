// @flow
import React from "react"
import { Button, ButtonGroup, Glyphicon } from "react-bootstrap"

type Props = {
  id?: number,
  onAdd: Function
}

export default ({ id, onAdd }: Props) =>
  <div>
    <br />
    <ButtonGroup vertical block>
      <Button
        bsSize="xsmall"
        onClick={() => onAdd(id)}
        aria-label="chevron-down"
      >
        <Glyphicon glyph="chevron-down" />
      </Button>
    </ButtonGroup>
    <br />
  </div>
