// @flow
import React from "react"
import { ButtonGroup, Button, ButtonToolbar, Glyphicon } from "react-bootstrap"
import { Upload } from "./"
import styles from "./styles.css"

type Props = {
  cancel: boolean,
  disabled: boolean,
  onAdd: Function,
  onCancel: Function,
  onUpload: Function
}

export default ({ onAdd, disabled, onUpload, cancel, onCancel }: Props) =>
  <ButtonToolbar>
    <ButtonGroup>
      <Button bsSize="small" bsStyle="info" onClick={() => onAdd()}>
        書き込み
      </Button>
    </ButtonGroup>
    <Upload disabled={disabled} onChange={onUpload} />
    {(() => {
      if (cancel) {
        return (
          <Button className="pull-right" onClick={() => onCancel()}>
            <Glyphicon glyph="remove" className={styles.action} />
          </Button>
        )
      }
    })()}
  </ButtonToolbar>
