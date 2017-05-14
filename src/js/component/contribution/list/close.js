// @flow
import React from "react"
import {Button, ButtonGroup, Glyphicon} from "react-bootstrap"

type Props = {
  ID?: number,
  onAdd: Function,
}

export default ({
  ID,
  onAdd,
}: Props) => (
  <div>
    <br/>
    <ButtonGroup vertical block>
      <Button bsSize="xsmall" onClick={() => onAdd(ID)} aria-label="chevron-down">
        <Glyphicon glyph="chevron-down"/>
      </Button>
    </ButtonGroup>
    <br/>
  </div>
)
