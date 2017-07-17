// @flow
import type { Children } from "react"
import React from "react"
import { Alert, Button, ButtonGroup, Glyphicon } from "react-bootstrap"

type Props = {
  children?: Children,
  id?: number,
  onDelete: Function
}

export default ({ children, id, onDelete }: Props) =>
  <div onDoubleClick={() => onDelete(id)}>
    <hr />
    <Alert bsStyle="success">記事の上でダブルクリックをすると閉じます</Alert>
    {children}
    <br />
    <ButtonGroup vertical block>
      <Button
        bsSize="xsmall"
        onClick={() => onDelete(id)}
        aria-label="chevron-up"
      >
        <Glyphicon glyph="chevron-up" />
      </Button>
    </ButtonGroup>
    <br />
  </div>
